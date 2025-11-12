const express = require('express');
const { ImageAnnotatorClient } = require('@google-cloud/vision');
const multer = require('multer');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

const upload = multer({
    storage: multer.memoryStorage(), // Store image in memory as a buffer
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

const client = new ImageAnnotatorClient();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No image uploaded.');
    }
    try {
        // Request Vision API to do Label Detection
        const [result] = await client.labelDetection({
            image: { content: req.file.buffer },
        });

        // Receive results & return as JSON object of labels.
        const labels = result.labelAnnotations.map(label => label.description);
        res.json({ labels });
    } catch (error) {
        console.error('Error processing image with Vision API:', error);
        res.status(500).send('Error processing image.');
    }
});

// STEP 6: Launch listening at the correct GAE port
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
