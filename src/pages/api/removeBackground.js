export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const formData = new FormData();
    formData.append('image_file', req.body);

    try {
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
        const buffer = await blob.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');

        res.status(200).json({ image: base64 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
