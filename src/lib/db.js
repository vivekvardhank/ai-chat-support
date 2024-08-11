import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (global.mongoose.conn) {
    console.log('Connected from previous');
    return global.mongoose.conn;
  } else {
    const conString = process.env.NEXT_PUBLIC_MONGODB_URI;
    
    if (!global.mongoose.promise) {
      global.mongoose.promise = mongoose.connect(conString, {
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    global.mongoose.conn = await global.mongoose.promise;
    console.log('Newly connected');
    return global.mongoose.conn;
  }
}
