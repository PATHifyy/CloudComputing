const { Storage } = require('@google-cloud/storage');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Inisialisasi Google Cloud Storage
const storage = new Storage({ keyFilename: path.join(__dirname, '../service-account-key.json') });
const bucketName = process.env.GOOGLE_CLOUD_BUCKET_NAME; // Nama bucket diambil dari .env

// Fungsi untuk mengunggah file ke bucket
const uploadToCloudStorage = async (file) => {
    const bucket = storage.bucket(bucketName);
    const fileName = `${uuidv4()}-${file.originalname}`; // Nama file unik
    const blob = bucket.file(fileName);

    return new Promise((resolve, reject) => {
        const stream = blob.createWriteStream({
            resumable: false,
            contentType: file.mimetype,
        });

        stream.on('error', (err) => {
            reject(`Upload failed: ${err.message}`);
        });

        stream.on('finish', () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            resolve(publicUrl);
        });

        stream.end(file.buffer); // Menggunakan buffer dari file
    });
};

module.exports = { uploadToCloudStorage };
