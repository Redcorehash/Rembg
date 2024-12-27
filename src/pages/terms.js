import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/globals.css';

const Terms = () => {
    return (
        <div className={styles.container}>
            <Header />
            <h1>Terms of Service</h1>
            <p>
                By using this app, you agree to our terms and conditions. Please read them
                carefully.
            </p>
            <Footer />
        </div>
    );
};

export default Terms;
