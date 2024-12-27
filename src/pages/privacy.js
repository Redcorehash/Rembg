import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';
import styles from '../styles/globals.css';

const Privacy = () => {
    return (
        <div className={styles.container}>
            <Header />
            <PrivacyPolicy />
            <Footer />
        </div>
    );
};

export default Privacy;
