import { useEffect, useState } from 'react';
import classes from './PeerReviewPaper.module.css'; // Import CSS module

const PeerReviewPaper = () => {
    const [paper, setPaper] = useState({});
    const [loading, setLoading] = useState(true);
    const [pid, setPid] = useState('');

    useEffect(() => {
        const paperId = new URLSearchParams(window.location.search).get('pid');
        if (!paperId) return;

        setPid(paperId);
        fetch(`http://localhost:3000/api/papers/${paperId}`)
            .then((response) => response.json())
            .then((data) => {
                setPaper(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching paper details:', error);
                setLoading(false);
            });
    }, []);

    if (!pid) {
        return (
            <div className={classes.noPaperContainer}>
                <div className={classes.noPaperBox}>
                    <h1 className={classes.noPaperTitle}>No Paper ID Provided</h1>
                    <p className={classes.noPaperText}>Please provide a valid Paper ID to view the details.</p>
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
            {/* Header Section */}
            <h1 className={classes.header}>My Submission</h1>

            {/* Paper Summary Card */}
            <div className={classes.paperCard}>
                <h2 className={classes.paperTitle}>{paper.title}</h2>
                <p className={classes.paperAbstract}>{paper.abstract}</p>
                <p className={classes.paperKeywords}>
                    <strong>Keywords:</strong> {paper.keywords}
                </p>
                <div className={classes.feedbackLinkContainer}>
                    <a
                        href={`/peer-review/feedback?pid=${pid}`}
                        className={classes.feedbackButton}
                    >
                        View Feedback
                    </a>
                </div>
            </div>

            {/* Feedback Section */}
            <div className={classes.feedbackSection}>
                <h2 className={classes.feedbackHeader}>Feedback from Peers</h2>
                {paper.reviews ? (
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
        </div>
    );
};

export default PeerReviewPaper;
