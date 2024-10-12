// src/components/AdminPage.jsx
import React, { useState } from 'react';
import styles from './AdminPage.module.css'; // Import the CSS Module
import AddConferenceForm from './AddConferenceForm';
import ComplaintsList from './ComplaintsList';

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState('addConference');

  const renderContent = () => {
    switch (activeSection) {
      case 'addConference':
        return <AddConferenceForm />;
      case 'viewComplaints':
        return <ComplaintsList/>
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
        </ul>
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default AdminPage;
