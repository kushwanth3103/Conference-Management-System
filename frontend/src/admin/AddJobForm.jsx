import { useState } from 'react';
import styles from './AddJobForm.module.css'; // Import the CSS module

const AddJobForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [institution, setInstitution] = useState('');
    const [location, setLocation] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields
        if (!jobTitle || !institution || !location || !link) {
            alert('Please fill in all the fields.');
            return;
        }

        // Handle form submission (e.g., save to backend or console log)
        const jobData = {
            jobTitle: jobTitle,
            institution: institution,
            location: location,
            link: link,
        };
        console.log(jobData);

        // Clear the form fields
        setJobTitle('');
        setInstitution('');
        setLocation('');
        setLink('');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Add New Job</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Job Title:</label>
                    <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className={styles.input}
                        placeholder="Enter job title"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Institution:</label>
                    <input
                        type="text"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        className={styles.input}
                        placeholder="Enter institution name"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className={styles.input}
                        placeholder="Enter location"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Job Link:</label>
                    <input
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className={styles.input}
                        placeholder="Enter job link"
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Add Job
                </button>
            </form>
        </div>
    );
};

export default AddJobForm;
