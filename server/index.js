import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import imagixRoutes from './routes/imagixRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') }); 
console.log('CLOUDINARY:', process.env.CLOUDINARY_CLOUD_NAME);// ← CHANGED

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/imagix', imagixRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from IMAGIX!');
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port 8080 http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
};

startServer();