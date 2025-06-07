import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
dotenv.config();

const app = express();

app.use(cors);
app.use(express.json());

app.use('/users', userRoutes);

async function main(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        app.listen(3000);
        console.log("listening to port 3000");
    }catch(err){
        console.error('MongoDB connection error:', err);
    }
}

main();
