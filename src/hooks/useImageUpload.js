import { useState } from 'react';
import { removeBackground } from '../services/backgroundRemover';
import { validateImageFile } from '../utils/fileUtils';

const useImageUpload = () => {
    const [image, setImage] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleImageUpload = async (file) => {
        setIsLoading(true);
        setError(null);
        try {
            validateImageFile(file);
            const result = await removeBackground(file);
            setResultImage(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { image, resultImage, isLoading, error, handleImageUpload };
};

export default useImageUpload;
