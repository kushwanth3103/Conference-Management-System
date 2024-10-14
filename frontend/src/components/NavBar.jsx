// src/components/NavBar.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isLoggedIn } from "../utils/authUtils.js";
import classes from './NavBar.module.css';

const NavBar = () => {
    const location = useLocation(); // Get the current route
    const navigate = useNavigate(); // For programmatic navigation

    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user session
        navigate('/login'); // Redirect to login page
    };

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarBrand}>
                {location.pathname === '/admin'?<Link to="/admin" className={classes.navbarIcon}>
                    <i className="fas fa-home"></i>
                </Link>:
                <Link to="/" className={classes.navbarIcon}>
                    <i className="fas fa-home"></i>
                </Link>}
                <div className={classes.navbarTitle}>
                    UTA Technology & Innovation Conference Series 2024
                </div>
            </div>
            <div>
                <ul className={classes.navLinks}>
                    {location.pathname === '/admin' ? (
                        <li className={classes.logoutLink} onClick={handleLogout}>
                            Logout
                        </li>
                    ) : (
                        // Show standard navbar for other routes
                        <>
                            <li>
                                <Link to="/career-development" className={classes.navLink}>
                                    Career Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/mentorship" className={classes.navLink}>
                                    Mentorship
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className={classes.navLink}>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/peer-review" className={classes.navLink}>
                                    Peer Review
                                </Link>
                            </li>
                            {isLoggedIn() ? (
                                <li
                                    className={classes.logoutLink}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </li>
                            ) : (
                                <li>
                                    <Link to="/login" className={classes.navLink}>
                                        Login/Signup
                                    </Link>
                                </li>
                            )}
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
