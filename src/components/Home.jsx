import React from 'react';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';

function QuickLinks({ text, link, linkTitle }) {
    return (
        <div className={classes.quickLink}>
            <p>{text}</p>
            <Link to={link}>{linkTitle}</Link>
        </div>
    );
}

export default function Home() {
    return (
        <div className={classes.relativeContainer}>
            <h1>UTA Conference - 2024</h1>
            <h4>A gathering of health professionals and researchers from around the world to discuss and explore advancements in healthcare.</h4>
            <div className={classes.quickLinksContainer}>
                <QuickLinks key="callForPapers" text="Submit innovative research on emerging technologies." link="call-for-papers" linkTitle="Call For Papers" />
                <QuickLinks key="register" text="Reserve your spot for participation." link="register" linkTitle="Register" />
                <QuickLinks key="schedule" text="Explore conference sessions Agenda and timings." link="schedule" linkTitle="Schedule" />
            </div>
        </div>
    );
}
