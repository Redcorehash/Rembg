import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/globals.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <Header />
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us at support@aibackgroundremover.com.</p>
            <Footer />
        </div>
    );
};

export default Contact;
