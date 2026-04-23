// Database connection and setup
import { MongoClient } from 'mongodb';

const uri = 'your_mongo_db_connection_string';
const client = new MongoClient(uri);

export const connectDB = async () => {
    await client.connect();
    console.log('Database connected');
};