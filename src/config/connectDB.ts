import mongoose from "mongoose";

async function connectDB() {
  await mongoose.connect(process.env.MONGOOSE_CONNECTION as string);

  return mongoose.connection;
}

export default connectDB;
