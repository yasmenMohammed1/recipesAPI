import { BaseService } from './base.service';
import { Recipe } from '../models/Recipes.model';
import { RecipesRepo } from '../repositories/Recipe.repo';
export class RecipeService extends BaseService<Recipe> {
  _repoobj = new RecipesRepo();
}
