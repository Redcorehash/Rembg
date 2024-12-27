export const validateImageFile = (file) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
        throw new Error('Invalid file type. Please upload a JPEG or PNG image.');
    }
    if (file.size > 5 * 1024 * 1024) {
        throw new Error('File size too large. Please upload an image smaller than 5MB.');
    }
};
