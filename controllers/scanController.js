const { uploadToCloudStorage } = require('../services/googleCloud');

// Fungsi utama untuk scan dan upload gambar ke bucket
const scanImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ error: 'No image file uploaded' });
        }

        // Upload file ke bucket
        const fileUrl = await uploadToCloudStorage(req.file);

        res.status(200).json({ message: 'Image uploaded successfully', fileUrl });
    } catch (error) {
        console.error('Error in scanImage:', error);
        res.status(500).json({ error: 'Error uploading image', details: error.message });
    }
};

module.exports = { scanImage };
