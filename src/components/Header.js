import React from 'react';
import Link from 'next/link';
import styles from '../styles/globals.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/assets/logo.png" alt="AI Background Remover" />
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    );
};

export default Header;
