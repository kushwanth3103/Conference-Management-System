import { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styles from './Feedback.module.css'; // Import the CSS module
import { REVIEWS } from '../utils/data';
import pdf from '../utils/Cloud_Computing_Research_and_Development_Trend.pdf'
const Feedback = () => {
    const [overallEvaluation, setOverallEvaluation] = useState('');
    const [relevance, setRelevance] = useState('');
    const [comments, setComments] = useState('');
    const [pid, setPid] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));
    const [paper, setPaper] = useState({});

    useEffect(() => {
        const paperId = new URLSearchParams(window.location.search).get('pid');
        setPid(paperId);
        
        if (paperId) {
            setPaper(REVIEWS)
            console.log(paper)
            setPdfUrl(pdf)
        }

    }, []);

    const handlePostReview = async () => {
        
    };

    return (
        <div className={styles.container}>
            <div className={styles.pdfSection}>
                <h1 className={styles.title}>{paper.title}</h1>
                {pdfUrl ? (
                    <div className={styles.pdfViewer}>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer fileUrl={pdfUrl} />
                        </Worker>
                    </div>
                ) : (
                    <div className={styles.noPdf}>
                        <p>PDF not available</p>
                    </div>
                )}
            </div>

            {/* Right Section: Review Form */}
            <div className={styles.reviewForm}>
                <div className={styles.section}>
                    <h2>1. Overall Evaluation:</h2>
                    <div className={styles.radioGroup}>
                        {['5 strong accept', '4 accept', '3 weak accept', '2 weak reject', '1 reject', '0 strong reject'].map((option) => (
                            <div key={option} className={styles.radioItem}>
                                <input
                                    type="radio"
                                    name="overallEvaluation"
                                    value={option}
                                    checked={overallEvaluation === option}
                                    onChange={(e) => setOverallEvaluation(e.target.value)}
                                    className={styles.radioInput}
                                />
                                <label>{option}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h2>2. RELEVANCE WRT. CONFERENCE TOPICS</h2>
                    <div className={styles.radioGroup}>
                        {['5 strong accept', '4 accept', '3 weak accept', '2 weak reject', '1 reject', '0 strong reject'].map((option) => (
                            <div key={option} className={styles.radioItem}>
                                <input
                                    type="radio"
                                    name="relevance"
                                    value={option}
                                    checked={relevance === option}
                                    onChange={(e) => setRelevance(e.target.value)}
                                    className={styles.radioInput}
                                />
                                <label>{option}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h2>3. Feedback</h2>
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className={styles.textarea}
                        placeholder="Comments..."
                    ></textarea>
                </div>

                <button onClick={handlePostReview} className={styles.submitButton}>
                    Post Review
                </button>
            </div>
        </div>
    );
};

export default Feedback;
