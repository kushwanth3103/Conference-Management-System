import { useState, useEffect } from 'react';
import classes from './SubmitPaper.module.css'; // Import the CSS module
import { CONFERENCES } from '../utils/dataConferences';

const SubmitPaper = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    paperTitle: '',
    abstract: '',
    keywords: '',
    paperFile: null,
    conference:''
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('hi')
    console.log(user)
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

  const handleConferenceChange = (event) => {
    const conferenceId = parseInt(event.target.value, 10);
    const conference = CONFERENCES.find((conf) => conf.conferenceId === conferenceId);
    setFormData({
      ...formData,
      conference: conference,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      paperFile: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    
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
            <label className={classes.label}>Select a Conference:</label>
            <select
              className={classes.conferenceSelect}
              name="conference-select"
              onChange={handleConferenceChange}
            >
                <option value="">--Choose a Conference--</option>
                {CONFERENCES.map((conference) => (
                  <option key={conference.conferenceId} value={conference.conferenceId}>
                    {conference.conferenceName}
                  </option>
                ))}
            </select>
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
