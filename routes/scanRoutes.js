const express = require('express');
const router = express.Router();
const multer = require('multer');
const { scanImage } = require('../controllers/scanController');

// Konfigurasi multer untuk menyimpan file di memory sebelum upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/scan_image', upload.single('image'), scanImage);

module.exports = router;
