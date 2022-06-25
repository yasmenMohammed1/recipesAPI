import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  recipes: [{ type: mongoose.Types.ObjectId, ref: 'recipes' }]
});
export const CategoryModel = mongoose.model('categories', schema);
export interface Categories {
  _id: mongoose.Types.ObjectId;
  image: string;
  name: string;
}
