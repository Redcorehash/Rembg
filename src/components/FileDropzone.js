import React, { useCallback } from 'react';
import styles from '../styles/globals.css';

const FileDropzone = ({ onFileUpload }) => {
    const handleDrop = useCallback(
        (e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            onFileUpload(file);
        },
        [onFileUpload]
    );

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div
            className={styles.dropzone}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <p>Drag & drop an image here, or click to upload.</p>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => onFileUpload(e.target.files[0])}
                className={styles.fileInput}
            />
        </div>
    );
};

export default FileDropzone;
