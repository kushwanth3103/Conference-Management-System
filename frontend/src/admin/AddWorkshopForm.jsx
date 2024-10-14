import { useState } from 'react';
import styles from './AddWorkshopForm.module.css'; // Import the CSS module

const AddWorkshopForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields
        if (!title || !date || !description || !link) {
            alert('Please fill in all the fields.');
            return;
        }

        // Handle form submission (e.g., save to backend or console log)
        const workshopData = {
            title: title,
            date: date,
            description: description,
            link: link,
        };
        console.log(workshopData);

        // Clear the form fields
        setTitle('');
        setDate('');
        setDescription('');
        setLink('');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Add New Workshop</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Workshop Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={styles.input}
                        placeholder="Enter workshop title"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={styles.textarea}
                        placeholder="Enter workshop description"
                    ></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Workshop Link:</label>
                    <input
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className={styles.input}
                        placeholder="Enter workshop link"
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Add Workshop
                </button>
            </form>
        </div>
    );
};

export default AddWorkshopForm;
