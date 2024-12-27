import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/globals.css';

const About = () => {
    return (
        <div className={styles.container}>
            <Header />
            <h1>About AI Background Remover</h1>
            <p>
                This app uses advanced AI technology to remove backgrounds from images
                seamlessly. It's fast, easy to use, and free!
            </p>
            <Footer />
        </div>
    );
};

export default About;
