import { useRef, useState } from "react";
import { useParams } from "react-router-dom"
import classes from './SubmissionPortal.module.css';
import SuccessModal from "./SuccessModal";

export default function SubmissionPortal(){
    const {conferenceId}=useParams();
    const [email,setEmail]=useState('');
    const dialog=useRef();

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const fd=new FormData(e.target);
        const data=Object.fromEntries(fd.entries());
        setEmail(data.email);
        console.log(data);
        dialog.current.open();
        setMessage('Your paper has been submitted successfully!');
    };

    return(
        <>
            <SuccessModal email={email} ref={dialog}/>
            <div className={classes.submissionsPortalContainer}>
                <h2>Submit Your Paper</h2>
                <form onSubmit={handleSubmit} className={classes.submissionForm}>
                    <div className={classes.formGroup}>
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="paperTitle">Paper Title:</label>
                        <input
                            type="text"
                            id="paperTitle"
                            name="paperTitle"
                            required
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="abstract">Abstract:</label>
                        <textarea
                            id="abstract"
                            name="abstract"
                            required
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="keywords">Keywords (comma-separated):</label>
                        <input
                            type="text"
                            id="keywords"
                            name="keywords"
                            required
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="file">Upload Your Paper (PDF):</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept=".pdf"
                            required
                        />
                    </div>
                    <button type="submit" className={classes.submitButton}>
                    Submit Paper
                    </button>
                </form>
                {message && <p className={classes.successMessage}>{message}</p>}
            </div>
        </>
    )
}