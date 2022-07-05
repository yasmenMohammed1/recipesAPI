import { BaseService } from './base.service';
import { Recipe } from '../models/Recipes.model';
import { RecipesRepo } from '../repositories/Recipe.repo';
import mongoose from 'mongoose';
import { UserRepo } from '../repositories/User.repo';
export class RecipeService extends BaseService<Recipe> {
  _repoobj = new RecipesRepo();
  _userobj = new UserRepo();
  async addRecipe(recipe: Recipe, _id: mongoose.Types.ObjectId) {
    const newRecipe = new RecipeService().createOne(recipe);
    try {
      const user: any = await this._userobj.find(_id);
      user.recipes.push(newRecipe);
      await user.save();
      return newRecipe;
    } catch (err: any) {
      throw new Error('from here', err.message);
    }
  }
}
