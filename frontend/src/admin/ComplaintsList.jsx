// src/components/ComplaintsList.jsx
import React from 'react';
import styles from './ComplaintsList.module.css';

// Sample complaint data
const complaints = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    phone: '+1 234 567 8901',
    inquiryType: 'General Inquiry',
    message: 'I have some questions regarding your upcoming conference schedule.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 987 654 3210',
    inquiryType: 'Technical Support',
    message:
      'I am facing issues with the online registration process. The payment gateway seems to be down.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    phone: '+1 555 666 7777',
    inquiryType: 'Feedback',
    message:
      'Great event! However, I would suggest improving the networking sessions for the next conference.',
  },
];

const ComplaintsList = () => (
  <div className={styles.complaintsContainer}>
    {complaints.map((complaint) => (
      <div key={complaint.id} className={styles.complaintItem}>
        <div className={styles.complaintHeader}>
          <span className={styles.userName}>{complaint.name}</span>
          <span className={styles.inquiryType}>{complaint.inquiryType}</span>
        </div>
        <div className={styles.contactInfo}>
          <p>Email: {complaint.email}</p>
          <p>Phone: {complaint.phone}</p>
        </div>
        <div className={styles.message}>{complaint.message}</div>
      </div>
    ))}
  </div>
);

export default ComplaintsList;
