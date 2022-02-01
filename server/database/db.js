import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = async () => {
  const URL = process.env.MONGODB_URI;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database conneceted successfully");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default connection;
