import mongoose from "mongoose";
import { config } from "dotenv";

// Load environment variables from .env
config();

const { MONGO_URI, NODE_ENV } = process.env;

if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI in your .env file');
}

const connectToDb = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
           
        });
        console.log(`Connected to MongoDB in ${NODE_ENV || 'development'} mode`);
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
}

export default connectToDb;
