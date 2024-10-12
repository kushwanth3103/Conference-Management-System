import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={`${classes.footerSection} ${classes.mdFooterSection}`}>
          <h2 className={classes.footerHeading}>Quick Links</h2>
          <ul>
            <li><Link to="/" className={classes.footerLink}>Home</Link></li>
            <li><Link to="/career-development" className={classes.footerLink}>Career Development</Link></li>
            <li><Link to="/mentorship" className={classes.footerLink}>Mentorship</Link></li>
            <li><Link to="/contact-us" className={classes.footerLink}>Contact Us</Link></li>
            <li><Link to="/peer-review" className={classes.footerLink}>Peer Review</Link></li>
          </ul>
        </div>

        <div className={`${classes.footerSection} ${classes.mdFooterSection}`}>
          <h2 className={classes.footerHeading}>User Actions</h2>
          <ul>
            <li><Link to="/login" className={classes.footerLink}>Login</Link></li>
            <li><Link to="/register" className={classes.footerLink}>Register</Link></li>
            <li><Link to="/register/virtual-conference" className={classes.footerLink}>Register Virtual Conference</Link></li>
            <li><Link to="/select/virtual-conference" className={classes.footerLink}>Conference Selector</Link></li>
            <li><Link to="/payment" className={classes.footerLink}>Payment</Link></li>
            <li><Link to="/submit/paper" className={classes.footerLink}>Submit Paper</Link></li>
          </ul>
        </div>

        <div className={`${classes.footerSection} ${classes.mdFooterSection}`}>
          <h2 className={classes.footerHeading}>Additional Links</h2>
          <ul>
            <li><Link to="/recorded-sessions" className={classes.footerLink}>Recorded Sessions</Link></li>
            <li><Link to="/video-conference" className={classes.footerLink}>Video Conference</Link></li>
            <li><Link to="/peer-review/paper" className={classes.footerLink}>Peer Review Paper</Link></li>
            <li><Link to="/peer-review/feedback" className={classes.footerLink}>Feedback</Link></li>
            <li><Link to="/not-found" className={classes.footerLink}>404 - Not Found</Link></li>
          </ul>
        </div>
      </div>

      <div className={classes.borderTop}>
        <p>&copy; {new Date().getFullYear()} Conference Management. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
