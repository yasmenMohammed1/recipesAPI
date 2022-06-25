import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { required: true, unique: true, type: String },
  password: { required: true, type: String },
  recipes: [{ type: mongoose.Types.ObjectId, ref: 'recipes' }]
});
export const UserModel = mongoose.model('users', schema);
export interface User {
  _id: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
