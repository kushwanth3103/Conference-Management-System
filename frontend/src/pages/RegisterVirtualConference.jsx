import { useState, useEffect } from 'react';
import styles from './RegisterVirtualConference.module.css';

const RegisterVirtualConference = () => {
    const [selectedOption, setSelectedOption] = useState("Virtual Attendee");
    const [cid, setCid] = useState(null);
    const [registrationFee, setRegistrationFee] = useState(100);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [occupation, setOccupation] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const cid = urlParams.get('cid');
        setCid(cid);
    }, []);

    useEffect(() => {
        if (selectedOption === "Virtual Attendee") {
            setRegistrationFee(100);
        } else if (selectedOption === "Virtual Presentation with publication") {
            setRegistrationFee(150);
        } else if (selectedOption === "Virtual Presentation and publication with Mentorship") {
            setRegistrationFee(200);
        }
    }, [selectedOption]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("Please fill in all the fields.");
            return;
        }
        window.location.href = '/payment?fee=' + registrationFee + '&cid=' + cid + '&type=' + selectedOption + '&name=' + e.target[0].value + '&email=' + e.target[1].value + '&occupation=' + e.target[2].value;
    };

    const validateConferenceId = (cid) => {
        if (isNaN(cid)) {
            return false;
        }
        if (cid === null) {
            return false;
        }
        return cid !== undefined;
    }

    if (!validateConferenceId(cid)) {
        return (
            <div className={styles.errorContainer}>
                <div className={styles.errorMessage}>
                    <h1 className={styles.errorTitle}>Invalid Conference ID</h1>
                    <p>Please provide a valid conference ID to register for the conference.</p>
                    <i className={`fas fa-exclamation-triangle ${styles.errorIcon}`}></i>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Conference Registration Form</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Full Name:</label>
                        <input 
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email Address:</label>
                        <input 
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Select an occupation:</label>
                        <select 
                            onChange={(e) => setOccupation(e.target.value)}
                            className={styles.select}>
                            <option>Student</option>
                            <option>Researcher</option>
                            <option>Industry Professional</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className={styles.radioGroup}>
                        <h2 className={styles.subTitle}>Registration Options</h2>
                        <div className={styles.radioOption}>
                            <input 
                                type="radio"
                                name="registration"
                                value="Virtual Attendee"
                                checked={selectedOption === "Virtual Attendee"}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className={styles.radio}
                            />
                            <span>Virtual Attendee - $100</span>
                        </div>
                        <div className={styles.radioOption}>
                            <input 
                                type="radio"
                                name="registration"
                                value="Virtual Presentation with publication"
                                checked={selectedOption === "Virtual Presentation with publication"}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className={styles.radio}
                            />
                            <span>Virtual Presentation with publication - $150</span>
                        </div>
                        <div className={styles.radioOption}>
                            <input 
                                type="radio"
                                name="registration"
                                value="Virtual Presentation and publication with Mentorship"
                                checked={selectedOption === "Virtual Presentation and publication with Mentorship"}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className={styles.radio}
                            />
                            <span>Virtual Presentation and publication with Mentorship - $200</span>
                        </div>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Continue to Payment
                    </button>
                </form>
            </div>
            <div className={styles.guidelines}>
                <h2>Guidelines to select the Registration Fee</h2>
                <ul className={styles.guidelinesList}>
                    <li>If you are a listener and just want to attend Virtual Conference, you can select Virtual attendee option.</li>
                    <li>If you want to be a listener but still want to present and publish, you can select the Virtual presenter option.</li>
                    <li>If you want to be a Listener, Present and get a mentor for guidance, select the third option.</li>
                    <li>The registration fee is based on your occupation. Students receive a discount.</li>
                    <li>It&apos;s advised to initiate the payment again if your online credit/debit card payment fails.</li>
                </ul>
            </div>
        </div>
    );
};

export default RegisterVirtualConference;
