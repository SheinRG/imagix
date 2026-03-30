import express from "express";
import * as dotenv from 'dotenv';
dotenv.config();
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message }); // Fix 3
    }
});

// Create a new post
router.post('/', async (req, res) => {
  try {
      const { name, prompt, photo } = req.body;
      const photoUrl = await cloudinary.uploader.upload(photo);

      const newPost = new Post({
          name,
          prompt,
          photo: photoUrl.url,
      });

      await newPost.save(); // Fix 1 — actually saves to MongoDB

      res.status(201).json({ success: true, data: newPost });
  } catch (error) {
     console.log('POST /post error:', error.message);
      res.status(500).json({ success: false, message: error.message }); // Fix 3
  }
});

export default router;