// src/components/AddConferenceForm.jsx
import React, { useState } from 'react';
import styles from './AddConferenceForm.module.css';

const AddConferenceForm = () => {
  const [speakers, setSpeakers] = useState([
    { name: '', bio: '', email: '', description: '', session_title: '', discussion_topic: '', start_time: '', end_time: '' },
  ]);

  const handleAddSpeaker = () => {
    setSpeakers([
      ...speakers,
      { name: '', bio: '', email: '', description: '', session_title: '', discussion_topic: '', start_time: '', end_time: '' },
    ]);
  };

  const handleRemoveSpeaker = (index) => {
    const newSpeakers = speakers.filter((_, i) => i !== index);
    setSpeakers(newSpeakers);
  };

  const handleSpeakerChange = (index, field, value) => {
    const newSpeakers = [...speakers];
    newSpeakers[index][field] = value;
    setSpeakers(newSpeakers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const conferenceData = {
      conferenceName: e.target.conferenceName.value,
      description: e.target.description.value,
      date: e.target.date.value,
      email: e.target.email.value,
      phone_number: e.target.phone_number.value,
      speakers,
    };
    console.log(conferenceData);
    // Submit the conferenceData to the backend or handle it as required.
  };

  return (
    <div className={styles.formContainer}>
      <h3>Add New Conference</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Conference Name:
          <input type="text" name="conferenceName" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Description:
          <textarea name="description" className={styles.textarea} required></textarea>
        </label>
        <label className={styles.label}>
          Date of Conference:
          <input type="date" name="date" className={styles.dateInput} required />
        </label>
        <label className={styles.label}>
          Email:
          <input type="email" name="email" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Contact Number:
          <input type="tel" name="phone_number" className={styles.input} required />
        </label>

        <h4>Speakers</h4>
        {speakers.map((speaker, index) => (
          <div key={index} className={styles.speakerContainer}>
            <label className={styles.label}>
              Name:
              <input
                type="text"
                value={speaker.name}
                onChange={(e) => handleSpeakerChange(index, 'name', e.target.value)}
                className={styles.input}
                required
              />
            </label>
            <label className={styles.label}>
              Bio:
              <textarea
                value={speaker.bio}
                onChange={(e) => handleSpeakerChange(index, 'bio', e.target.value)}
                className={styles.textarea}
                required
              ></textarea>
            </label>
            <label className={styles.label}>
              Email:
              <input
                type="email"
                value={speaker.email}
                onChange={(e) => handleSpeakerChange(index, 'email', e.target.value)}
                className={styles.input}
                required
              />
            </label>
            <label className={styles.label}>
              Description:
              <textarea
                value={speaker.description}
                onChange={(e) => handleSpeakerChange(index, 'description', e.target.value)}
                className={styles.textarea}
                required
              ></textarea>
            </label>
            <label className={styles.label}>
              Session Title:
              <input
                type="text"
                value={speaker.session_title}
                onChange={(e) => handleSpeakerChange(index, 'session_title', e.target.value)}
                className={styles.input}
                required
              />
            </label>
            <label className={styles.label}>
              Discussion Topic:
              <input
                type="text"
                value={speaker.discussion_topic}
                onChange={(e) => handleSpeakerChange(index, 'discussion_topic', e.target.value)}
                className={styles.input}
                required
              />
            </label>
            <label className={styles.label}>
              Start Time:
              <input
                type="time"
                value={speaker.start_time}
                onChange={(e) => handleSpeakerChange(index, 'start_time', e.target.value)}
                className={styles.input}
                required
              />
            </label>
            <label className={styles.label}>
              End Time:
              <input
                type="time"
                value={speaker.end_time}
                onChange={(e) => handleSpeakerChange(index, 'end_time', e.target.value)}
                className={styles.input}
                required
              />
            </label>
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => handleRemoveSpeaker(index)}
            >
              Remove Speaker
            </button>
          </div>
        ))}

        <button type="button" className={styles.button} onClick={handleAddSpeaker}>
          Add Another Speaker
        </button>
        <button type="submit" className={styles.button}>
          Add Conference
        </button>
      </form>
    </div>
  );
};

export default AddConferenceForm;
