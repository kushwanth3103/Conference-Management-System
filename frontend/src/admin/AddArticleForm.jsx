import { useState } from 'react';
import styles from './AddArticleForm.module.css'; // Import the CSS module

const AddArticleForm = () => {
    const [articleName, setArticleName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields
        if (!articleName || !description || !link) {
            alert('Please fill in all the fields.');
            return;
        }

        // Handle form submission (e.g., save to backend or console log)
        const articleData = {
            name: articleName,
            description: description,
            link: link,
        };
        console.log(articleData);

        // Clear the form fields
        setArticleName('');
        setDescription('');
        setLink('');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Add New Article</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Article Name:</label>
                    <input
                        type="text"
                        value={articleName}
                        onChange={(e) => setArticleName(e.target.value)}
                        className={styles.input}
                        placeholder="Enter article name"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={styles.textarea}
                        placeholder="Enter article description"
                    ></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Article Link:</label>
                    <input
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className={styles.input}
                        placeholder="Enter article link"
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Add Article
                </button>
            </form>
        </div>
    );
};

export default AddArticleForm;
