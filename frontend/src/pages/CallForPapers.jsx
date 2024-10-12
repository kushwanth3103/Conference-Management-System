import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './CallForPapers.module.css'; // Import the CSS module

const HomePage = () => {
  const navigate = useNavigate(); 
  const handleClick=()=>{
    navigate('/submit/paper')
  }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            Welcome to the UTA Conference Management 2024
          </h1>
        </div>
        <div className={styles.grid}>
        <div className={styles.submissionGuidelines}>
          <h2 className={styles.sectionTitle}>Submission Guidelines</h2>
          <ul className={styles.guidelinesList}>
            <li>Submit original papers not previously published.</li>
            <li>Follow the provided template for formatting (available on the submission portal).</li>
            <li>Maximum paper length: 8 pages including references.</li>
            <li>All papers must be submitted in PDF format.</li>
            <li>Submissions will undergo a double-blind review process.</li>
          </ul>
        </div>

        <div className={styles.logoContainer}>
          <img src={logo} alt="Conference Logo" className={styles.logo} />
        </div>

        <div className={styles.importantDates}>
          <div className={styles.buttonContainer}>
            <button className={styles.submitButton} onClick={handleClick}>
              Submission Portal
            </button>
          </div>
          
          <div>
            <h2 className={styles.sectionTitle}>Important Dates</h2>
            <ul className={styles.datesList}>
              <li>
                <strong>Submission Deadline:</strong> October 15, 2024
              </li>
              <li>
                <strong>Notification of Acceptance:</strong> November 30, 2024
              </li>
              <li>
                <strong>Conference Dates:</strong> January 20-22, 2025
              </li>
              <li>
                <strong>Camera Ready Papers Due:</strong> December 15, 2024
              </li>
            </ul>
          </div>
        </div>
        </div>
      <div className={styles.faqSection}>
        <h2 className={styles.faqTitle}>FAQ&apos;s</h2>
        <div className={styles.faqContainer}>
          <details className={styles.faqItem}>
            <summary className={styles.faqSummary}>How do I submit my paper?</summary>
            <p className={styles.faqContent}>You can submit your paper through the Submission Portal using the guidelines provided.</p>
          </details>
          <details className={styles.faqItem}>
            <summary className={styles.faqSummary}>What is the review process?</summary>
            <p className={styles.faqContent}>All submissions will undergo a double-blind review process to ensure fairness and quality.</p>
          </details>
          <details className={styles.faqItem}>
            <summary className={styles.faqSummary}>Are there any fees?</summary>
            <p className={styles.faqContent}>No, there are no fees for paper submission but we do have registration fees for the conference.</p>
          </details>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
