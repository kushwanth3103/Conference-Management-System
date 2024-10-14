// src/components/AdminPage.jsx
import React, { useState } from 'react';
import styles from './AdminPage.module.css'; // Import the CSS Module
import AddConferenceForm from './AddConferenceForm';
import ComplaintsList from './ComplaintsList';
import AddMentorForm from './AddMentorForm';
import AddArticleForm from './AddArticleForm';
import AddWorkshopForm from './AddWorkshopForm';
import AddJobForm from './AddJobForm';

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState('addConference');

  const renderContent = () => {
    switch (activeSection) {
      case 'addConference':
        return <AddConferenceForm />;
      case 'viewComplaints':
        return <ComplaintsList/>
      case 'addMentor':
        return <AddMentorForm/>
      case 'addArticle':
        return <AddArticleForm/>
      case 'addWorkshop':
        return <AddWorkshopForm/>
      case 'addJob':
        return <AddJobForm/>
      default:
        return <AddConferenceForm />;
    }
  };

  return (
    <div className={styles.adminContainer}>
      <div className={styles.sidebar}>
        <h2>Admin Panel</h2>
        <ul>
          <li
            className={`${styles.listItem} ${
              activeSection === 'addConference' ? styles.active : ''
            }`}
            onClick={() => setActiveSection('addConference')}
          >
            Add New Conference
          </li>
          <li
            className={`${styles.listItem} ${
              activeSection === 'viewComplaints' ? styles.active : ''
            }`}
            onClick={() => setActiveSection('viewComplaints')}
          >
            View Complaints/Feedback
          </li>
          <li
            className={`${styles.listItem} ${
              activeSection === 'addMentor' ? styles.active : ''
            }`}
            onClick={() => setActiveSection('addMentor')}
          >
            Add Mentor
          </li>
          <li
            className={`${styles.listItem} ${
              activeSection === 'addArticle' ? styles.active : ''
            }`}
            onClick={() => setActiveSection('addArticle')}
          >
            Add Article
          </li>
          <li
            className={`${styles.listItem} ${
              activeSection === 'addWorkshop' ? styles.active : ''
            }`}
            onClick={() => setActiveSection('addWorkshop')}
          >
            Add Workshop
          </li>
          <li
            className={`${styles.listItem} ${
              activeSection === 'addJob' ? styles.active : ''
            }`}
            onClick={() => setActiveSection('addJob')}
          >
            Add Job
          </li>
        </ul>
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default AdminPage;
