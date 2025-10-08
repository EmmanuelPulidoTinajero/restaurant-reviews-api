import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConnect = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri) {
      console.error('Error: MONGO_URI is not defined in the environment variables.');
      process.exit(1);
    }
    
    const conn = await mongoose.connect(mongoUri);
    
    console.log(`Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
    } else {
        console.error('An unknown error occurred during DB connection.');
    }
    process.exit(1);
  }
};