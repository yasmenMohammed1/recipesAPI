import { Recipe, RecipesModel } from '../models/Recipes.model';
import { BaseRebo } from './Base.repo';

export class RecipesRepo extends BaseRebo<Recipe> {
  _collectionName: string = 'Recipe';
  _model: Object = RecipesModel;
  _populate: string = 'user categories';
}
