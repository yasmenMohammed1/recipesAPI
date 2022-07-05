import mongoose from 'mongoose';
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI || '', {})
  .then(() => {
    console.log('db is connected');
  })
  .catch((err) => console.log('err', err));
