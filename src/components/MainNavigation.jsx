import { NavLink, Link } from "react-router-dom";
import classes from './MainNavigation.module.css'
import { FcConferenceCall } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function MainNavigation(){
    const [click,setClick]=useState(false);

    const handleClick=()=>{
        setClick(!click)
    }

    const closeMobileMenu=()=>{
        setClick(false)
    }

    return(
        <nav className={classes.navbar}>
            <div className={`${classes.navbarContainer} ${classes.container}`}>
                <Link to="/" className={classes.navbarLogo} onClick={closeMobileMenu}>
                    <FcConferenceCall className={classes.navbarIcon}/>
                    Conference Management System
                </Link> 
                <div className={classes.menuIcon} onClick={handleClick}>
                    {click?<FaTimes/>:<FaBars/>}
                </div>
            </div>
            <div>
                <ul className={click ? `${classes.navMenu} ${classes.active}` : `${classes.navMenu}`}>
                    <li className={classes.navItem}>
                            <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${classes.navLinks}` + (isActive ? ` ${classes.activated}` : "")
                            }
                            onClick={closeMobileMenu}
                            >
                            Home
                            </NavLink>
                    </li>
                    <li className={classes.navItem}>
                            <NavLink
                            to="/career-development-resources"
                            className={({ isActive }) =>
                                `${classes.navLinks}` + (isActive ? ` ${classes.activated}` : "")
                            }
                            onClick={closeMobileMenu}
                            >
                            Career Development Resources
                            </NavLink>
                    </li>
                    <li className={classes.navItem}>
                            <NavLink
                            to="/contact-us"
                            className={({ isActive }) =>
                                `${classes.navLinks}` + (isActive ? ` ${classes.activated}` : "")
                            }
                            onClick={closeMobileMenu}
                            >
                            Contact Us
                            </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MainNavigation;