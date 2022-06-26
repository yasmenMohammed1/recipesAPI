import mongoose from 'mongoose';
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || '', () => {
  console.log('db is connected');
});
