import { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import styles from './AddMentorForm.module.css';
import { CONFERENCES } from '../utils/dataConferences'; // Import your conference data

const AddMentorForm = () => {
    const [mentorName, setMentorName] = useState('');
    const [mentorBio, setMentorBio] = useState('');
    const [selectedConferences, setSelectedConferences] = useState([]);
    const [conferences,setConferences]=useState([]);
    useEffect(() => {

        const conferenceNames = CONFERENCES.map((conference) => ({
            name: conference.conferenceName 
        }));
        setConferences(conferenceNames);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!mentorName || !mentorBio || selectedConferences.length === 0) {
            alert('Please fill out all fields.');
            return;
        }

        // Handle form submission (e.g., send data to backend or log to console)
        const mentorData = {
            name: mentorName,
            bio: mentorBio,
            conferences: selectedConferences.map((conf) => conf.conferenceName),
        };
        console.log(mentorData);

        // Clear form fields
        setMentorName('');
        setMentorBio('');
        setSelectedConferences([]);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Add Mentor</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Mentor Name:</label>
                    <input
                        type="text"
                        value={mentorName}
                        onChange={(e) => setMentorName(e.target.value)}
                        className={styles.input}
                        placeholder="Enter Mentor Name"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Mentor Bio:</label>
                    <textarea
                        value={mentorBio}
                        onChange={(e) => setMentorBio(e.target.value)}
                        className={styles.textarea}
                        placeholder="Enter Mentor Bio"
                    ></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Select Area of expertise:</label>
                    <Multiselect
                        options={CONFERENCES}
                        selectedValues={selectedConferences}
                        onSelect={(selectedList) => setSelectedConferences(selectedList)}
                        onRemove={(selectedList) => setSelectedConferences(selectedList)}
                        displayValue="conferenceName"
                        className={styles.multiselect}
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Add Mentor
                </button>
            </form>
        </div>
    );
};

export default AddMentorForm;
