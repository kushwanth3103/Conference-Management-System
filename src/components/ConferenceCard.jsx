import { Link } from 'react-router-dom';
import conferenceImg from '../assets/conference.png'
import styles from './ConferenceCard.module.css'
import { FaLink } from "react-icons/fa";
export default function ConferenceCard({conferenceId,imagePic,name,description}){
    return (
        <div className={styles.card}>
          <img
            src={conferenceImg}
            alt="Conference"
            className={styles.image}
          />
          <div className={styles.content}>
            <h3 className={styles.title}>{name}</h3>
            <h4 className={styles.description}>{description}</h4>
            <div className={styles.quickLinks}>
              <span><Link to={`call-for-papers/${conferenceId}`} className={styles.link}>Call for papers <FaLink/></Link></span>
              <span><Link to="registration" className={styles.link}>Registration <FaLink/></Link></span>
              <span><Link to={`schedule/${conferenceId}`} className={styles.link}>Schedule <FaLink/></Link></span>
            </div>
            <a href={`:${conferenceId}`} className={styles.viewDetails}>View Details</a>
          </div>
        </div>
      );
}