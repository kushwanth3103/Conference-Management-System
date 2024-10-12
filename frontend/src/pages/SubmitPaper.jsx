import { useState, useEffect } from 'react';
import classes from './SubmitPaper.module.css'; // Import the CSS module

const SubmitPaper = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    paperTitle: '',
    abstract: '',
    keywords: '',
    paperFile: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setFormData({
        ...formData,
        fullName: user.name,
        email: user.email,
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      paperFile: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formSubmission = new FormData();
    formSubmission.append('fullName', formData.fullName);
    formSubmission.append('email', formData.email);
    formSubmission.append('paperTitle', formData.paperTitle);
    formSubmission.append('abstract', formData.abstract);
    formSubmission.append('keywords', formData.keywords);
    formSubmission.append('paperFile', formData.paperFile);

    try {
      const response = await fetch('http://localhost:3000/api/papers/submit', {
        method: 'POST',
        body: formSubmission,
      });

      if (response.ok) {
        alert('Paper submitted successfully!');
        window.location.href = '/peer-review/paper?pid=' + (await response.json()).paperId;
      } else {
        alert('Failed to submit paper. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting paper:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <h1 className={classes.title}>Submit Your Paper</h1>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label className={classes.label}>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={classes.input}
            />
          </div>
          <div className={classes.formGroup}>
            <label className={classes.label}>Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={classes.input}
            />
          </div>
          <div className={classes.formGroup}>
            <label className={classes.label}>Paper Title:</label>
            <input
              type="text"
              name="paperTitle"
              value={formData.paperTitle}
              onChange={handleInputChange}
              className={classes.input}
            />
          </div>
          <div className={classes.formGroup}>
            <label className={classes.label}>Abstract:</label>
            <textarea
              name="abstract"
              value={formData.abstract}
              onChange={handleInputChange}
              className={classes.textarea}
              rows="4"
            ></textarea>
          </div>
          <div className={classes.formGroup}>
            <label className={classes.label}>Keywords (comma-separated):</label>
            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
              className={classes.input}
            />
          </div>
          <div className={classes.formGroup}>
            <label className={classes.label}>Upload Your Paper (PDF):</label>
            <input
              type="file"
              name="paperFile"
              accept="application/pdf"
              onChange={handleFileChange}
              className={classes.input}
            />
          </div>
          <button type="submit" className={classes.submitButton}>
            Submit Paper
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitPaper;
