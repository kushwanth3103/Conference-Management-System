import { Link } from 'react-router-dom';
import { isLoggedIn } from "../utils/authUtils.js";
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarBrand}>
                <Link to="/" className={classes.navbarIcon}>
                    <i className="fas fa-home"></i>
                </Link>
                <div className={classes.navbarTitle}>Conference - 2024</div>
            </div>
            <div>
                <ul className={classes.navLinks}>
                    <li>
                        <Link to="/career-development" className={classes.navLink}>Career Development</Link>
                    </li>
                    <li>
                        <Link to="/mentorship" className={classes.navLink}>Mentorship</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className={classes.navLink}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/peer-review" className={classes.navLink}>Peer Review</Link>
                    </li>
                    {isLoggedIn() ? (
                        <li
                            className={classes.logoutLink}
                            onClick={() => {
                                localStorage.removeItem('user');
                                window.location.href = '/';
                            }}
                        >
                            Logout
                        </li>
                    ) : (
                        <li>
                            <Link to="/login" className={classes.navLink}>Login/Signup</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
