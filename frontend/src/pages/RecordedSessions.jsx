import React, { useState, useEffect } from 'react';
import sessionsImage from '../assets/sessions.png';
import poster from '../assets/img.png';
import classes from './RecordedSessions.module.css'; // Import CSS module
import { RECORDINGS } from '../utils/data';

const RecordedSessions = () => {
	const [recordedSessions, setRecordedSessions] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setRecordedSessions(RECORDINGS)
		setLoading(false)
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<main className={classes.pageContainer}>
			<div className={classes.imageAndTextContainer}>
				<img className={classes.sessionImage} src={sessionsImage} alt="Recorded Session" />
				<div className={classes.textContainer}>
					<div className={classes.readyText}>
						<div className={classes.titleText}>Ready to learn</div>
					</div>
					<div className={classes.bestText}>
						<div className={classes.titleText}>From the best?</div>
					</div>
					<div className={classes.taglineText}>
						~ Let's hop on and make the most of this virtual journey ~
					</div>
					<div className={classes.buttonContainer}>
						<a
							href="/video-conference"
							className={classes.attendButton}
						>
							Attend Conference
						</a>
					</div>
				</div>
			</div>

			<div className={classes.recordedSessionsSection}>
				<h1 className={classes.sectionTitle}>Recorded Sessions</h1>
				{recordedSessions.length > 0 ? (
					<div className={classes.gridContainer}>
						{recordedSessions.map((session) => (
							<div key={session.rec_id} className={classes.sessionCard}>
								<h2 className={classes.sessionTitle}>Session {session.rec_id}</h2>
								<video
									controls
									className={classes.video}
									poster={poster}
								>
									<source src={`http://localhost:3000/api/recordings/${session.rec_id}`} type="video/webm" />
									Your browser does not support the video tag.
								</video>
								<p className={classes.recordedDate}>
									Recorded on: {new Date(session.date).toLocaleDateString()}
								</p>
							</div>
						))}
					</div>
				) : (
					<p>No recorded sessions available.</p>
				)}
			</div>
		</main>
	);
};

export default RecordedSessions;
