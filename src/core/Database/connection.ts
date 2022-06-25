import mongoose from 'mongoose';
require('dotenv').config();

mongoose.connect(
  process.env.MONGO_DB || 'mongodb://localhost:27017/ingrediantsDB',
  () => {
    console.log('db is connected');
  }
);
