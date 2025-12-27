import { connect } from "mongoose";

const mongoUri: string = process.env.MONGODB_URI!;
const connectDB1 = async () => {
  // Use 127.0.0.1 instead of localhost for local MongoDB instances
  // to avoid potential IPv6 connection issues with newer Node.js versions.
  await connect(mongoUri)
    .then(() => {
      console.log("MongoDB Connected successfully");
    })
    .catch((error) => {
      console.error(`MongoDB Connection Error: ${error}`);
      // Exit process with failure
      process.exit(1);
    });
};
connectDB1();
export default connectDB1;
