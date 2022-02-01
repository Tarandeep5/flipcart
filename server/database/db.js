import mongoose from "mongoose";

const connection = async () => {
  const URL =
    "mongodb+srv://tarandeep:qwerty1234@cluster0.4u9r1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
