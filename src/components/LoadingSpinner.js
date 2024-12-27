import React from 'react';
import styles from '../styles/globals.css';

const LoadingSpinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <img src="/assets/loading.gif" alt="Loading..." />
        </div>
    );
};

export default LoadingSpinner;
