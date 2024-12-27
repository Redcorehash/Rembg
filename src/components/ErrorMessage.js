import React from 'react';
import styles from '../styles/globals.css';

const ErrorMessage = ({ message }) => {
    return (
        <div className={styles.errorContainer}>
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;
