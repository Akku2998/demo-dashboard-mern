import { MongoClient } from "mongodb";

async function connectDB() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    return client;
  } catch (err) {
    console.log("Error in DB connection", err);
  }
}

export { connectDB };
