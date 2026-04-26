import express from "express";
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.route('/').get(async (req, res) => {
    res.send('Hello from Imagix!');
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await fetch(
            "https://api-inference.huggingface.co/models/prompthero/openjourney",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`HuggingFace API error: ${err}`);
        }

        // Detect actual content type from response headers
        const contentType = response.headers.get('content-type') || 'image/jpeg';
        
        const arrayBuffer = await response.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString('base64');
        
        console.log('Content-Type from HuggingFace:', response.headers.get('content-type'));
console.log('Base64 preview:', base64.substring(0, 30));

        // Send both the base64 and the correct MIME type
        res.status(200).json({ 
            photo: base64,
            mimeType: contentType  // e.g. "image/jpeg" or "image/png" or "image/webp"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error?.message || 'Something went wrong' });
    }
});

export default router;