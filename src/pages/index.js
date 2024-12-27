import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import { removeBackground } from '../services/backgroundRemover';
import styles from '../styles/globals.css';

export default function Home() {
    const [image, setImage] = useState(null);
    const [resultImage, setResultImage] = useState(null);

    const handleImageUpload = async (file) => {
        const result = await removeBackground(file);
        setResultImage(result);
    };

    return (
        <div className={styles.container}>
            <h1>AI Background Remover</h1>
            <ImageUploader onImageUpload={handleImageUpload} />
            {resultImage && (
                <div>
                    <h2>Result:</h2>
                    <img src={resultImage} alt="Result" />
                </div>
            )}
        </div>
    );
      }
