import { Recipe, RecipesModel } from '../models/Recipes.model';
import { BaseRebo } from './Base.repo';

export class RecipesRepo extends BaseRebo<Recipe> {
  _collectionName: string = 'recipes';
  _model: Object = RecipesModel;
  _populate: string = 'users';
}
