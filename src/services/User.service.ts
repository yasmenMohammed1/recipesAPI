import { BaseService } from './base.service';
import { UserRepo } from '../repositories/User.repo';
import { User } from '../models/User.model';
import mongoose from 'mongoose';
import { Recipe } from '../models/Recipes.model';
import { RecipeService } from './Recipe.service';
export class UserService extends BaseService<User> {
  _repoobj: UserRepo = new UserRepo();
  recipeService = new RecipeService();
  async addRecipe(recipe: Recipe, _id: mongoose.Types.ObjectId) {
    const newRecipe = new RecipeService().createOne(recipe);
    try {
      const user: any = await this._repoobj.find(_id);
      user.recipesList.push(newRecipe);
      await user.save();
      return user;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async deleteRecipe(
    _id: mongoose.Types.ObjectId,
    recipeId: mongoose.Types.ObjectId
  ) {
    this.recipeService.deleteOne(recipeId);
    try {
      const user: any = await this._repoobj.find(_id);
      user.recipesList = user.recipesList.filter((a: any) => {
        a._id !== recipeId;
      });
      await user.save();
      return user;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async editRecipe(
    _id: mongoose.Types.ObjectId,
    data: any,
    recipeId: mongoose.Types.ObjectId
  ) {
    const newRecipe = new RecipeService().updateOne(_id, recipeId, data);
    try {
      const user: any = await this._repoobj.find(_id);
      user.recipes = user.recipes
        .filter((a: any) => {
          a._id == recipeId;
        })
        .push(newRecipe);
      await user.save();
      return user;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
