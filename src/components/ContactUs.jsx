import React from 'react';
import PHONE_ICON from '/phone.svg';
import EMAIL_ICON from '/email.svg';
import LOCATION_ICON from '/location.svg';
import styles from './ContactUs.module.css'; // Import the CSS module

function Information({ image, altText, text }) {
  return (
    <div className={styles.information}>
      <img src={image} alt={altText} />
      <p>{text}</p>
    </div>
  );
}

export default function ContactUs() {
  return (
    <>
        <div>
        <h4 className={styles.subheading}>
        Any questions or remarks? Just write us a message!
      </h4>
        </div>
      <div className={styles.mainContainer}>
        <div className={styles.informationContainer}>
          <h3>Contact Information</h3>
          <Information image={PHONE_ICON} altText="Phone Icon" text="+1012 3456 789" />
          <Information image={EMAIL_ICON} altText="Email Icon" text="demo@gmail.com" />
          <Information image={LOCATION_ICON} altText="Location Icon" text="701 S Nedderman Dr, Arlington, TX 76019" />
          {/* Add Google Map or an Image */}
          <img src="https://via.placeholder.com/300x200" alt="Map Location" className={styles.mapImage} />
        </div>
        <div className={styles.formContainer}>
          <form>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" id="phoneNumber" name="phoneNumber" required />
              </div>
            </div>
            <div className={styles.radioGroup}>
              <label>Select Subject</label>
              <div className={styles.radioGroupOptions}>
                <label>
                  <input type="radio" name="subject" value="option1" />
                  General Inquiry
                </label>
                <label>
                  <input type="radio" name="subject" value="option2" />
                  About Schedules
                </label>
                <label>
                  <input type="radio" name="subject" value="option3" />
                  Regarding paper submission
                </label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}