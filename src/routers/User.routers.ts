import { RecipeController } from '../controllers/Recipe.controller';
import express, { IRouter } from 'express';
import { UserController } from '../controllers/User.controller';
import { ICustomRouter } from '../interfaces/router.interface';
import { UserValidator } from '../models/validations/user.validator';
import { SigninController } from '../controllers/Signin.controller';
import { RegisterController } from '../controllers/Register.controller';
import { GuestIp } from '../controllers/guesr.controller';
export class UserRouter implements ICustomRouter {
  getRouter(): IRouter {
    const _userControllerObj = new UserController();
    const _recipeControllerObj = new RecipeController();
    const userRouter = express.Router();
    const guest = new GuestIp();
    userRouter
      .route('/users')
      .get(_userControllerObj.getAll)
      .post(new UserValidator().post, new RegisterController().post);
    userRouter
      .route('/users/:_id')
      .put(new UserValidator().post, _userControllerObj.put)
      .get(_userControllerObj.getOne)
      .delete(_userControllerObj.delete);
    userRouter.route('/users/:_id/recipe/').post(_userControllerObj.postRecipe);
    userRouter.route('/users/:_id/recipe/:_recipeId').put(_recipeControllerObj.put);
    userRouter.route('/login/:_id').post(new SigninController().getAuth);
    userRouter.route('/getIp').get(guest.getIp);

    return userRouter;
  }
}
