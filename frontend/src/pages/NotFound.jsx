import React from 'react';
import classes from './NotFound.module.css'; // Import CSS module

const NotFound = () => {
  return (
    <div className={classes.notFoundContainer}>
      <i className={`fas fa-exclamation-triangle ${classes.icon}`}></i>
      <h1 className={classes.title}>Page Not Found</h1>
    </div>
  );
}

export default NotFound;
