import { NextFunction, Request, Response } from 'express';
import { Recipe, RecipesModel } from '../models/Recipes.model';
import { RecipeService } from '../services/Recipe.service';
import { BaseController } from './base.controller';

export class RecipeController extends BaseController<Recipe> {
  _serviceObj = new RecipeService();

  async addRecipe(req: Request, res: Response, next: NextFunction) {
    const recipe = req.body;
    const categoryID = req.body.categories;
    const userID = req.body.user;
    try {
      const newRecipe = await new RecipeService().addRecipe(
        recipe,
        categoryID,
        userID
      );
      res.status(200).json(newRecipe);
    } catch (err) {
      next(err);
    }
  }
  async editRecipe(req: Request, res: Response, next: NextFunction) {
    const _id = req.params._id;
    const recipeId = req.params.recipe;
    const recipe = req.body;

    try {
      const newRecipe = new RecipeService().updateOne(_id, recipeId, recipe);
      return newRecipe;
    } catch (err) {
      next(err);
    }
  }
}
