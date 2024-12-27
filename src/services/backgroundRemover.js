export const removeBackground = async (file) => {
    const formData = new FormData();
    formData.append('image_file', file);

    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': 'YOUR_API_KEY_HERE',
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to remove background');
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
};
