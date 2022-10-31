import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

mongoose.connect(`mongodb+srv://amandahp:${process.env.DBPASSWORD}@cluster0.41sis2m.mongodb.net/todo`);

let db = mongoose.connection;

export default db;