import mongoose from "mongoose";  
import dotenv from 'dotenv';  
dotenv.config();  
async function connectToDatabase() {  
  try {  
    await mongoose.connect(process.env.MONGO_URL);   
      console.log("Connected to MongoDB successfully!");  
  } catch (error) {  
    console.error("Error connecting to MongoDB:", error);  
  }  
};
export default connectToDatabase;