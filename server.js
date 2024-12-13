const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Memuat file .env

const app = express();
app.use(bodyParser.json());

// Mount routes
const scanRoutes = require('./routes/scanRoutes');
app.use('/api/scan', scanRoutes);

// Default route jika path tidak ditemukan
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
