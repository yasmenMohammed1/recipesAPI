import { string } from 'joi';
import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  categories: { type: mongoose.Types.ObjectId, ref: 'categories', required: true },
  title: { type: String, required: true },
  ingrediants: [{ name: String, quantity: String }],
  recipe: String,
  image: String,
  users: { type: mongoose.Types.ObjectId, ref: 'users' }
});
export const RecipesModel = mongoose.model('recipes', schema);
export interface Recipe {
  _id: mongoose.Types.ObjectId;
  title: string;
  // ingrediants: { name: string; quantity: string }[];
  ingrediants: string;
  recipe: string;
  image: string;
  userId: mongoose.Types.ObjectId;
}
