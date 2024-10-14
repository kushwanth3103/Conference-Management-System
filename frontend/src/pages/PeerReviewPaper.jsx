import { useEffect, useState } from 'react';
import classes from './PeerReviewPaper.module.css'; // Import CSS module
import { REVIEWS } from '../utils/data';

const PeerReviewPaper = () => {
    const [paper, setPaper] = useState({});
    const [loading, setLoading] = useState(true);
    const [pid, setPid] = useState('');
    const [showFeedback, setShowFeedback] = useState(false); // State for feedback visibility
    const [isHighlighted, setIsHighlighted] = useState(false); // State for card highlight

    useEffect(() => {
        const paperId = new URLSearchParams(window.location.search).get('pid');
        if (!paperId) return;

        setPid(paperId);
        setPaper(REVIEWS);
        setLoading(false);
    }, []);

    const toggleFeedback = () => {
        setShowFeedback(!showFeedback); // Toggle feedback visibility
        setIsHighlighted(!isHighlighted); // Toggle card highlight
    };

    if (!pid) {
        return (
            <div className={classes.noPaperContainer}>
                <div className={classes.noPaperBox}>
                    <h1 className={classes.noPaperTitle}>No Paper ID Provided</h1>
                    <p className={classes.noPaperText}>
                        Please provide a valid Paper ID to view the details.
                    </p>
                    <i className={`fas fa-exclamation-triangle ${classes.noPaperIcon}`}></i>
                </div>
            </div>
        );
    }

    if (loading) {
        return <div className={classes.loadingContainer}>Loading...</div>;
    }

    return (
        <div className={classes.pageContainer}>
            <h1 className={classes.header}>My Submissions</h1>

            {/* Paper Summary Card */}
            <div
                className={`${classes.paperCard} ${isHighlighted ? classes.highlighted : ''}`}
                onClick={toggleFeedback} // Highlight card on click
            >
                <h2 className={classes.paperTitle}>{paper.title}</h2>
                <p className={classes.paperAbstract}>{paper.abstract}</p>
                <p className={classes.paperKeywords}>
                    <strong>Keywords:</strong> {paper.keywords}
                </p>
                <p className={classes.paperKeywords}>
                    <strong>Conference:</strong> Cloud Computing
                </p>
                <div className={classes.feedbackLinkContainer}>
                    <button className={classes.feedbackButton}>
                        {showFeedback ? 'Hide Feedback' : 'View Feedback'}
                    </button>
                </div>
            </div>

            {/* Feedback Section (Conditional Rendering) */}
            {showFeedback && (
                <div className={classes.feedbackSection}>
                    <h2 className={classes.feedbackHeader}>Feedback from Peers</h2>
                    {paper.reviews && paper.reviews.length > 0 ? (
                        <>
                            <p className={classes.feedbackRating}>
                                <span className="font-bold">Overall rating:</span> {paper.reviews[0].rating}/5
                            </p>
                            <p className={classes.feedbackRelevance}>
                                <span className="font-bold">Relevance:</span> {paper.reviews[0].relevance}/5
                            </p>
                            <p className={classes.peerCommentsTitle}>Comments from Peers:</p>
                            <div className={classes.peerCommentsList}>
                                {paper.reviews.map((review, index) => (
                                    <div key={index} className={classes.peerComment}>
                                        <p className={classes.commentText}>{review.comments}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className={classes.noReviewsText}>No reviews available for this paper.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default PeerReviewPaper;
