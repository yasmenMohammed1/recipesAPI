import { NextFunction, Request, response, Response } from 'express';
import mongoose from 'mongoose';
import { User } from '../models/User.model';
import { UserService } from '../services/User.service';
import { BaseController } from './base.controller';

export class UserController extends BaseController<User> {
  _serviceObj: UserService = new UserService();
  async deleteRecipe(req: Request, res: Response, next: NextFunction) {
    const _id = new mongoose.Types.ObjectId(req.params._id);
    const recipeId = req.body.recipe;
    try {
      const newRecipe = await new UserService().deleteRecipe(_id, recipeId);
      return newRecipe;
    } catch (err) {
      next(err);
    }
  }
  postRecipe = async (req: Request, res: Response, next: NextFunction) => {
    const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
    const recipe = req.body;

    try {
      const data = await this._serviceObj.addRecipe(recipe, _id);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  async editRecipe(req: Request, res: Response, next: NextFunction) {
    const _id = new mongoose.Types.ObjectId(req.params._id);
    const recipe = new mongoose.Types.ObjectId(req.params.recipeId);
    const data = req.body;
    try {
      const newRecipe = await this._serviceObj.editRecipe(_id, data, recipe);
      console.log('nrew recipe', newRecipe);
      response.status(200).json(newRecipe);
    } catch (err) {
      next(err);
    }
  }
}
