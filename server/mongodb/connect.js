import mongoose from 'mongoose';

const connectDB= (url)=>{
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(()=> console.log('MongoDB connected successfully'))
    .catch((err)=> console.log('Error connecting to MongoDB', err));
     

} 


export default connectDB;