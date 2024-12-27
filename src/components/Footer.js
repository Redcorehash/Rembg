import React from 'react';
import styles from '../styles/globals.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2023 AI Background Remover. All rights reserved.</p>
            <p>
                <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;
