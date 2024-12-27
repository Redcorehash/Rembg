import React from 'react';
import styles from '../styles/globals.css';

const ResultDisplay = ({ resultImage }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resultImage;
        link.download = 'background-removed.png';
        link.click();
    };

    return (
        <div className={styles.resultContainer}>
            <h2>Result:</h2>
            <img src={resultImage} alt="Result" className={styles.resultImage} />
            <button onClick={handleDownload} className={styles.downloadButton}>
                Download Image
            </button>
        </div>
    );
};

export default ResultDisplay;
