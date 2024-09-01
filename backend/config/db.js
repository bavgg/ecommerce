import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://gestopajonas:VWFyYs6Di805km0W@cluster0.x28nq0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection error", error.message);
    process.exit(1);
  }
}
