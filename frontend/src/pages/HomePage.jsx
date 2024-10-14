import bgImage from '../assets/bg.png';
import { useEffect, useState } from "react";
import styles from './HomePage.module.css'; // Import the CSS module
import { ANNOUNCEMENTS } from '../utils/data';

const Announcements = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        setAnnouncements(ANNOUNCEMENTS);
        setIsLoading(false);
    }, []);

    return (
        <div
            style={{ backgroundImage: `url(${bgImage})` }}
            className={styles.announcementContainer}
        >
            <div className={styles.layoutWrapper}>
                {/* Left Section */}
                <div className={styles.contentWrapper}>
                    <div className={styles.conferenceInfo}>
                        <h1 className={styles.conferenceTitle}>
                            UTA Technology & Innovation Conference Series 2024
                        </h1>
                        <p className={styles.conferenceDescription}>
                            Bridging Innovation and Technology
                        </p>
                    </div>

                    <div className={styles.gridContainer}>
                        <div className={styles.optionCard}>
                            <h3 className={styles.optionTitle}>Explore conference sessions Agenda and timings.</h3>
                            <a href="/select/virtual-conference" className={styles.optionLink}>
                                Schedule <i className="fas fa-link ml-1"></i>
                            </a>
                        </div>

                        <div className={styles.optionCard}>
                            <h3 className={styles.optionTitle}>Reserve your spot for participation.</h3>
                            <a href="/register/virtual-conference" className={styles.optionLink}>
                                Register <i className="fas fa-link ml-1"></i>
                            </a>
                        </div>

                        <div className={styles.optionCard}>
                            <h3 className={styles.optionTitle}>Submit innovative research on emerging technologies.</h3>
                            <a href="/call-for-papers" className={styles.optionLink}>
                                Call For Papers <i className="fas fa-link ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section (News and Announcements) */}
                <div className={styles.newsSection}>
                    <h2 className={styles.newsTitle}>News and Announcements</h2>
                    <div className={styles.announcementContent}>
                        {isLoading ? (
                            <div className={styles.loadingSection}>
                                <span className={styles.spinner}></span>
                                <span className={styles.loadingText}>Loading...</span>
                            </div>
                        ) : (
                            <div>
                                {announcements.length > 0 ? (
                                    announcements.map(announcement => (
                                        <div key={announcement.aid} className={styles.announcementItem}>
                                            <h3 className={styles.announcementTitle}>{announcement.announcement}</h3>
                                            <p className={styles.announcementDetails}>
                                                {announcement.date} at {announcement.time}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <div className={styles.noAnnouncements}>
                                        <i className={`fas fa-bullhorn ${styles.noAnnouncementsIcon}`}></i>
                                        <div className={styles.noAnnouncementsText}>No announcements to display.</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announcements;
