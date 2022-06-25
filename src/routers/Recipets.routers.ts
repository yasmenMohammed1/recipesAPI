import express, { IRouter } from 'express';
import { RecipeValidtor } from '../models/validations/Recipe.validator';
import { RecipeController } from '../controllers/Recipe.controller';
import { ICustomRouter } from '../interfaces/router.interface';
export class RecipeRouter implements ICustomRouter {
  getRouter(): IRouter {
    const _recipeControllerObj = new RecipeController();
    const recipeRouter = express.Router();
    recipeRouter
      .route('/recipe')
      .get(_recipeControllerObj.getAll)
      .post(new RecipeValidtor().post, _recipeControllerObj.post);
    recipeRouter
      .route('/recipe/:_id')
      .put(_recipeControllerObj.put)
      .get(_recipeControllerObj.getOne)
      .delete(_recipeControllerObj.delete);
    return recipeRouter;
  }
}
