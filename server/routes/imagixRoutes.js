import express from "express";
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.route('/').get(async (req, res) => {
    res.send('Hello from raghavaaaa!');
}
);

router.route('/').post(async(req, res) =>{
    try {
        const {prompt} = req.body;
        const response = await openai.images.generate({
            model:'dall-e-3',
            prompt:prompt,
            size:'1024x1024',
            response_format:'b64_json',
            n:1
        });

         console.log(response.data[0]); 

        const image= response.data[0].b64_json;

          console.log('image exists:', !!image, 'length:', image?.length);
        res.status(200).json({photo:image});
    } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message || 'Something went wrong' });
}

}) 

export default router;