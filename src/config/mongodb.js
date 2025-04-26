import mongoose from "mongoose";
import { config } from "dotenv";

// Load environment variables from .env
config();

const { MONGO_URI, NODE_ENV } = process.env;

// Ensure the MONGO_URI is defined in the .env file
if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI in your .env file');
}

// Function to connect to the MongoDB database
const connectToDb = async () => {
    try {
        // Connect to MongoDB using the provided URI
        await mongoose.connect(MONGO_URI, {
       
        });

        // Log a success message with the current environment mode
        console.log(`Connected to MongoDB in ${NODE_ENV || 'development'} mode`);
    } catch (error) {
        // Log an error message and exit the process if the connection fails
        console.error('Error connecting to database:', error);
        process.exit(1); 
    }
}

export default connectToDb;