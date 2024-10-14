import React, { useState } from 'react';
import styles from './Mentorship.module.css'; // Import the CSS module

const Mentorship = () => {
    const [selectedMentor, setSelectedMentor] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '' });

    const mentors = [
        { name: 'Elon Musk', expertise: 'AI, ML', description: 'Expert in Artificial Intelligence and Machine Learning with over 10 years of experience.' },
        { name: 'Joe', expertise: 'AI, Cloud Computing', description: 'Expert in Artificial Intelligence and Machine Learning with over 10 years of experience.' }
    ];

    const timeSlots = [
        'Monday 9:00 - 10:00 AM',
        'Tuesday 9:00 - 10:00 AM',
        'Wednesday 9:00 - 10:00 AM',
        'Friday 9:00 - 10:00 AM'
    ];

    const handleSubmit = () => {
        console.log('Mentee Registration Data:', { ...formData, selectedMentor, selectedTime });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Mentorship</h1>
            <p className={styles.subHeader}>Connect participants with mentors</p>

            <div className={styles.mentorContainer}>
                <h2 className={styles.profileTitle}>Mentor Profiles and Areas of Expertise</h2>
                <div className={styles.mentorList}>
                    {mentors.map((mentor, index) => (
                        <div key={index} className={styles.mentorProfile}>
                            <div>
                                <h3 className={styles.profileTitle}>{mentor.name}</h3>
                                <p className={styles.profileDescription}>{mentor.description}</p>
                            </div>
                            <div className={styles.expertiseText}>
                                <p>Areas of Expertise:</p>
                                <p>{mentor.expertise}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.formContainer}>
                <h2 className={styles.profileTitle}>Mentee Registration Form</h2>
                <div className={styles.grid}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={styles.formInput}
                            placeholder="Enter name"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={styles.formInput}
                            placeholder="Enter email"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Select a Mentor</label>
                        <select
                            value={selectedMentor}
                            onChange={(e) => setSelectedMentor(e.target.value)}
                            className={styles.formSelect}
                        >
                            <option value="">Select Mentor</option>
                            {mentors.map((mentor, index) => (
                                <option key={index} value={mentor.name}>{mentor.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p className={styles.formLabel}>Select a time slot:</p>
                        <div className={styles.timeSlotsContainer}>
                            {timeSlots.map((time, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedTime(time)}
                                    className={`${styles.timeSlot} ${selectedTime === time ? styles.selectedTimeSlot : styles.unselectedTimeSlot}`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.textCenter}>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className={styles.submitButton}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mentorship;
