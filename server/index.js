import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import imagixRoutes from './routes/imagixRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/imagix', imagixRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from IMAGIX!');
}
);

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port 8080 http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }

    
};

startServer(); 