import React, { useState, useEffect } from 'react';
import classes from './PeerReview.module.css'; // Import CSS module
import { useNavigate } from 'react-router-dom';
import { PAPERS } from '../utils/data';

const PeerReview = () => {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/peer-review/paper?pid=1')
    };

    useEffect(() => {
        // Fetch papers from the backend
        const fetchPapers = async () => {
            try {
                // const response = await fetch('http://localhost:3000/api/papers');
                // const data = await response.json();
                // console.log(data[0])
                setPapers(PAPERS);
            } catch (error) {
                console.error('Error fetching papers:', error);
            }
            setLoading(false);
        };

        fetchPapers();
    }, []);

    if (loading) {
        return <div className={classes.loadingContainer}>Loading...</div>;
    }

    return (
        <div className={classes.pageContainer}>
            {/* Header Section */}
            <div className={classes.headerSection}>
                <div className={classes.titleAndText}>
                    <h1 className={classes.title}>Review your peer papers</h1>
                    <p className={classes.infoText}>
                        * Papers assigned based on area of expertise
                    </p>
                </div>
                <button
                    className={classes.mySubmissionButton}
                    onClick={handleClick}
                >
                    My Submissions
                </button>
            </div>

            {/* Peer Papers List */}
            <div className={classes.papersList}>
                {papers.length > 0 ? (
                    papers.map((paper) => (
                        <div key={paper.pid} className={classes.paperItem}>
                            <div>
                                <h2 className={classes.paperTitle}>{paper.title}</h2>
                                <p className={classes.paperAbstract}>{paper.abstract}</p>
                                <p className={classes.paperAbstract}><b>Conference:</b> Cloud Computing</p>
                            </div>
                            <a
                                href={`/peer-review/feedback?pid=${paper.pid}`}
                                className={classes.reviewButton}
                            >
                                Review Now
                            </a>
                        </div>
                    ))
                ) : (
                    <div className={classes.noPapersContainer}>
                        <div className={classes.noPapersBox}>
                            <h1 className={classes.noPapersTitle}>No papers available for review</h1>
                            <p className={classes.noPapersText}>Please check back later for more papers to review.</p>
                            <i className={`fas fa-exclamation-triangle ${classes.noPapersIcon}`}></i>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PeerReview;
