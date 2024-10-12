import React, { useState } from 'react';
import styles from './ContactUs.module.css'; // Import the CSS module

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    console.log('Sending message:', { firstName, lastName, email, phoneNumber, subject, message });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contactInfo}>
          <div>
            <h2 className={styles.contactTitle}>Contact Information</h2>
            <div className={styles.infoSpace}>
              <div className={styles.infoItem}>
                <i className="fas fa-phone-alt"></i>
                <span>+1012 3456 789</span>
              </div>
              <div className={styles.infoItem}>
                <i className="fas fa-envelope"></i>
                <span>demo@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <i className="fas fa-map-marker-alt"></i>
                <span>701 S Nedderman Dr, Arlington, TX 76019</span>
              </div>
            </div>
          </div>
          <div className={styles.mapSection}>
            <h3 className={styles.mapTitle}>Google Map</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.3887555021487!2d-97.11513542483384!3d32.73123488098166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7c48658b1b2b%3A0xd65b3525fd9208f!2s701%20S%20Nedderman%20Dr%2C%20Arlington%2C%20TX%2076019!5e0!3m2!1sen!2sus!4v1696447165251!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Contact Us</h1>
          <p className={styles.formSubtitle}>Any question or remarks? Just write us a message!</p>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputContainer}>
                <label className={styles.label}>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Phone Number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={styles.input}
                />
              </div>
            </div>

            <div>
              <label className={styles.label}>Select Subject:</label>
              <div className={styles.radioGroup}>
                <div className={styles.radioItem}>
                  <input
                    type="radio"
                    name="subject"
                    value="General Inquiry"
                    checked={subject === 'General Inquiry'}
                    onChange={(e) => setSubject(e.target.value)}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioLabel}>General Inquiry</span>
                </div>
                <div className={styles.radioItem}>
                  <input
                    type="radio"
                    name="subject"
                    value="Technical Support"
                    checked={subject === 'Technical Support'}
                    onChange={(e) => setSubject(e.target.value)}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioLabel}>Technical Support</span>
                </div>
                <div className={styles.radioItem}>
                  <input
                    type="radio"
                    name="subject"
                    value="Feedback"
                    checked={subject === 'Feedback'}
                    onChange={(e) => setSubject(e.target.value)}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioLabel}>Feedback</span>
                </div>
              </div>
            </div>

            <div>
              <label className={styles.label}>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
                rows="4"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="button"
              onClick={handleSendMessage}
              className={styles.submitButton}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
