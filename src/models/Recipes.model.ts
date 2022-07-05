import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  ingrediants: [{ name: String, quantity: String }],
  recipe: String,
  image: String,
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
  categories: { type: mongoose.Types.ObjectId, ref: 'Category', required: true }
});
export const RecipesModel = mongoose.model('Recipe', schema);
export interface Recipe {
  _id: mongoose.Types.ObjectId;
  title: string;
  ingrediants: string;
  recipe: string;
  image: string;
}
