import { useParams,Link } from "react-router-dom"
import { CONFERENCE_DETAILS } from "../store/conferenceData";
import conferenceImg from '../assets/conference.png'
import styles from "./CallForPapers.module.css";
import Faq from "./Faq";

export default function CallForPapers(){
    const {conferenceId}=useParams();
    const conference = CONFERENCE_DETAILS.find((conference) => conference.id === conferenceId); 
    console.log(conferenceId)
  
    if (!conference) {
        console.error("Conference not found!");
        return <div>Conference not found!</div>;
    }
    const guidelines=conference.submissionGuidelines;
    const importantDates=conference.importantDates;
    const faqs=conference.faqs;
    return (
        <>
                <div className={styles.callForPapersContainer}>
                <div className={styles.submissionGuidelines}>
                    <h3>Submission Guidelines</h3>
                    <ul>
                    {guidelines.map((guideline, index) => (
                        <li key={index}>{guideline}</li>
                    ))}
                    </ul>
                </div>

                <div className={styles.coverImageContainer}>
                    <img src={conferenceImg} alt="cover pic" className={styles.coverImage} />
                </div>

                <div className={styles.rightPanel}>
                    <div className={styles.submissionButtonContainer}>
                        <Link to="submission-portal" className={styles.submissionButton}><button className={styles.submissionButton}>Submission Portal</button></Link>
                    </div>

                    <div className={styles.importantDatesContainer}>
                    <h3>Important Dates</h3>
                    {Object.keys(importantDates).map((key) => (
                        <span key={key} className={styles.importantDateItem}>
                        {key}: {importantDates[key]}
                        </span>
                    ))}
                    </div>
                </div>
            </div>
            <h3>FAQ's</h3>
            <div>
                {faqs.map((item)=>(
                    <Faq question={item.question} answer={item.answer}/>
                ))}
            </div>
        </>
    )
}