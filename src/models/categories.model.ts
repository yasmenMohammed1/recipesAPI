import { string } from 'joi';
import mongoose from 'mongoose';
import { Recipe } from './Recipes.model';
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  recipes: [{ type: mongoose.Types.ObjectId, ref: 'Recipe' }]
});
export const CategoryModel = mongoose.model('Category', schema);
export interface Categories {
  _id: mongoose.Types.ObjectId;
  image: string;
  name: string;
  recipes: Array<mongoose.Types.ObjectId>;
}
