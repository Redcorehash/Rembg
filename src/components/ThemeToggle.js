import React from 'react';
import { useTheme } from '../hooks/useTheme';
import styles from '../styles/globals.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={styles.themeToggle}>
            <img
                src={theme === 'light' ? '/assets/icons/moon.svg' : '/assets/icons/sun.svg'}
                alt={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            />
        </button>
    );
};

export default ThemeToggle;
