import ConferenceCard from './ConferenceCard';
import classes from './Home.module.css';
import { CONFERENCE_DETAILS } from '../store/conferenceData';
export default function Home(){
    return(
        <div className={classes.relativeContainer}>
            <img src="https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2019-11/the-best-of-connect.webp?h=c0e3cfef&itok=8umFIy51" className={classes.coverImage} alt="cover pic"/>
            <div className={classes.horizontalScrollContainer}>
                {CONFERENCE_DETAILS.map((conference)=>(
                    <ConferenceCard key={conference.name} conferenceId={conference.id} name={conference.name} description={conference.description}/>
                ))}
            </div>
        </div>
    )
}