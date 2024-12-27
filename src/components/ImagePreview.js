import React from 'react';
import styles from '../styles/globals.css';

const ImagePreview = ({ image }) => {
    return (
        <div className={styles.imagePreviewContainer}>
            <h2>Preview:</h2>
            <img src={URL.createObjectURL(image)} alt="Preview" className={styles.previewImage} />
        </div>
    );
};

export default ImagePreview;
