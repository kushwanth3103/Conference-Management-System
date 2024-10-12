import React, { useState, useEffect, useRef } from 'react';
import { Peer } from 'peerjs';
import io from 'socket.io-client';
import classes from './VideoConference.module.css'; // Import the CSS module

const VideoConference = () => {
  // ... existing code ...
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [videoStreams, setVideoStreams] = useState([]);
  const [peerId, setPeerId] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [userName, setUserName] = useState('Guest');
  const [peerNameMap, setPeerNameMap] = useState({});

  const localVideoRef = useRef(null);
  const localStreamRef = useRef(null);
  const peerRef = useRef(null);
  const socketRef = useRef(null);

  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorderRef = useRef(null);

  useEffect(() => {
    // Initialize Socket.IO
    socketRef.current = io('http://localhost:3000', {
      withCredentials: true
    });

    // Initialize PeerJS
    const peer = new Peer();
    peerRef.current = peer;

    // Get the logged-in user's data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    setUserName(user?.name || 'Guest');

    // When PeerJS is initialized and ready
    peer.on('open', async (id) => {
      console.log(`Connected to PeerJS server with ID: ${id}`);
      setPeerId(id);

      // Register the peer ID with Socket.IO
      socketRef.current.emit('register', {
        uid: user?.id,
        peerId: id,
        userName: user?.name || 'Guest',
      });

      // Access user's media devices and set up the local stream
      await getLocalStream();
    });

    // Handle incoming calls from other peers
    peer.on('call', handleIncomingCall);

    // Socket.IO event listeners
    socketRef.current.on('new-peer', handleNewPeer);
    socketRef.current.on('all-peers', handleAllPeers);
    socketRef.current.on('peer-left', handlePeerLeft);
    socketRef.current.on('chat-message', handleChatMessage);

    return () => {
      peer.destroy();
      socketRef.current.disconnect();
    };
  }, []);

  const getLocalStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      localStreamRef.current = stream;

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const handleIncomingCall = (call) => {
    const callerUserName = call.metadata.userName || 'Guest';

    call.answer(localStreamRef.current, { metadata: { userName } });

    call.on('stream', (remoteStream) => {
      addVideoStream(remoteStream, call.peer, callerUserName);
    });

    call.on('close', () => {
      setVideoStreams((prev) => prev.filter((s) => s.id !== call.peer));
    });

    call.on('error', (err) => {
      console.error('Call error:', err);
    });
  };

  const handleNewPeer = (peerInfo) => {
    setPeerNameMap((prev) => ({ ...prev, [peerInfo.peerId]: peerInfo.userName }));
    callPeer(peerInfo);
  };

  const handleAllPeers = (peers) => {
    const newPeerNameMap = {};
    peers.forEach((peerInfo) => {
      newPeerNameMap[peerInfo.peerId] = peerInfo.userName;
      callPeer(peerInfo);
    });
    setPeerNameMap((prev) => ({ ...prev, ...newPeerNameMap }));
  };

  const handlePeerLeft = (peerInfo) => {
    setVideoStreams((prev) => prev.filter((s) => s.id !== peerInfo.peerId));
    setPeerNameMap((prev) => {
      const newMap = { ...prev };
      delete newMap[peerInfo.peerId];
      return newMap;
    });
  };

  const callPeer = (peerInfo) => {
    // Check if we already have a call with this peer
    if (videoStreams.some((stream) => stream.id === peerInfo.peerId)) {
      console.log(`Already connected to peer ${peerInfo.peerId}`);
      return;
    }

    const call = peerRef.current.call(peerInfo.peerId, localStreamRef.current, {
      metadata: { userName },
    });

    call.on('stream', (remoteStream) => {
      addVideoStream(remoteStream, peerInfo.peerId, peerInfo.userName);
    });

    call.on('close', () => {
      setVideoStreams((prev) => prev.filter((s) => s.id !== peerInfo.peerId));
    });

    call.on('error', (err) => {
      console.error('Call error:', err);
    });
  };

  const startRecording = () => {
    const stream = localStreamRef.current;
    if (!stream) return;

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;
    if (!mediaRecorder) return;

    mediaRecorder.stop();
    setIsRecording(false);
  };

  const uploadRecording = async () => {
    if (recordedChunks.length === 0) return;

    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const formData = new FormData();
    formData.append('recording', blob, 'recording.webm');

    try {
      const response = await fetch('http://localhost:3000/api/recordings/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Recording uploaded successfully');
        setRecordedChunks([]);
      } else {
        console.error('Failed to upload recording');
      }
    } catch (error) {
      console.error('Error uploading recording:', error);
    }
  };

  const addVideoStream = (stream, id, name) => {
    setVideoStreams((prevStreams) => {
      const existingStreamIndex = prevStreams.findIndex((s) => s.id === id);

      if (existingStreamIndex !== -1) {
        const updatedStreams = [...prevStreams];
        updatedStreams[existingStreamIndex] = { stream, id, name };
        return updatedStreams;
      } else {
        return [...prevStreams, { stream, id, name }];
      }
    });
  };

  const toggleMute = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsMuted((prevMuted) => !prevMuted);
    }
  };

  const handleChatMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      sender: userName,
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Emit the message to the server
    socketRef.current.emit('chat-message', message);

    // Update local state
    setMessages((prevMessages) => [...prevMessages, message]);
    setNewMessage('');
  };
  
  const videoCount = videoStreams.length + 1;

  return (
    <div className={`${classes.minHeight} ${classes.bgGray100} ${classes.flexContainer}`}>
      {/* Video Grid Section */}
      <div className={classes.videoSection}>
        <div
          className={`${classes.grid} ${
            videoCount === 1
              ? classes.gridCols1
              : videoCount === 2
              ? classes.gridCols2
              : videoCount === 3
              ? classes.gridCols3
              : classes.gridCols4
          }`}
        >
          {/* Display local video stream */}
          <div className={classes.videoContainer}>
            <video
              ref={localVideoRef}
              className={classes.video}
              autoPlay
              muted
            />
            <div className={classes.overlay}>
              {userName}
            </div>
          </div>
          {/* Display remote video streams */}
          {videoStreams.map((streamObj, index) => (
            <div key={index} className={classes.videoContainer}>
              <video
                className={classes.video}
                ref={(videoElement) => {
                  if (videoElement && !videoElement.srcObject) {
                    videoElement.srcObject = streamObj.stream;
                  }
                }}
                autoPlay
                playsInline
              />
              <div className={classes.overlay}>
                {streamObj.name || 'Guest'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className={classes.chatSection}>
        <div className={classes.chatHeader}>Chats</div>

        {/* Messages Display */}
        <div className={classes.messages}>
          {messages.map((msg, index) => (
            <div key={index} className={classes.messageContainer}>
              <span className={classes.sender}>{msg.sender}</span>
              <div className={classes.message}>{msg.content}</div>
              <span className={classes.time}>{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className={classes.inputSection}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className={classes.input}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} className={`${classes.button} ${classes.buttonHover}`}>
            <i className="fas fa-paper-plane text-white"></i>
          </button>
        </div>
      </div>

      {/* Conference Controls */}
      <div className={classes.controlSection}>
        <button
          className={`${classes.controlButton} ${isMuted ? classes.muted : classes.unmuted}`}
          onClick={toggleMute}
        >
          {isMuted ? (
            <i className="fas fa-microphone-slash text-white"></i>
          ) : (
            <i className="fas fa-microphone text-white"></i>
          )}
        </button>
        <button
          className={`${classes.controlButton} ${isRecording ? classes.recording : classes.notRecording}`}
          onClick={isRecording ? stopRecording : startRecording}
        >
          <i className={`fas ${isRecording ? 'fa-stop' : 'fa-record-vinyl'} text-white`}></i>
        </button>
        {recordedChunks.length > 0 && (
          <button
            className={`${classes.controlButton} bg-blue-500`}
            onClick={uploadRecording}
          >
            <i className="fas fa-upload text-white"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoConference;
