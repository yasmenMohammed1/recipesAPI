import mongoose from 'mongoose';
import { Recipe } from './Recipes.model';
const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { required: true, unique: true, type: String },
  password: { required: true, type: String },
  recipes: [{ type: mongoose.Types.ObjectId, ref: 'Recipe' }]
});
export const UserModel = mongoose.model('User', schema);
export interface User {
  _id: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
