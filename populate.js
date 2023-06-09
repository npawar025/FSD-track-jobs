import * as dotenv from "dotenv";
dotenv.config();
// import mockData from './mock-data.json'
import mockData from "./mock-data.json" assert { type: "json" };

import Job from './models/Job.js'
import connectDB from "./db/connect.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.create(mockData);
    console.log("Success !!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();