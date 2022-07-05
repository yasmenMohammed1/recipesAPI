import { BaseService } from './base.service';
import { Recipe } from '../models/Recipes.model';
import { RecipesRepo } from '../repositories/Recipe.repo';
import mongoose from 'mongoose';
import { UserRepo } from '../repositories/User.repo';
import { CategoryRepo } from '../repositories/Category.repo';
export class RecipeService extends BaseService<Recipe> {
  _repoobj = new RecipesRepo();
  _userobj = new UserRepo();
  async addRecipe(
    recipe: Recipe,
    categoryId: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId
  ) {
    const newRecipe: any = await new RecipeService().createOne(recipe);
    try {
      const user: any = await this._userobj.find(userId);
      const category: any = await new CategoryRepo().find(categoryId);
      user.recipes?.push(newRecipe.data._id);
      user.save();
      console.log('newRecipe._id', await newRecipe.data._id);
      category.recipes?.push(newRecipe.data._id);
      category.save();
      return user;
    } catch (err: any) {
      console.log('from here', err.message);

      throw new Error('from here', err.message);
    }
  }
}
