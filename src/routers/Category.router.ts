import express, { IRouter } from 'express';
import { ICustomRouter } from '../interfaces/router.interface';
import { CategoryController } from '../controllers/Categoriy.controller';
export class CategoryRouter implements ICustomRouter {
  getRouter(): IRouter {
    const _categoryControlle = new CategoryController();
    const categoryRouter = express.Router();
    categoryRouter
      .route('/categories')
      .get(_categoryControlle.getAll)
      .post(_categoryControlle.post);
    categoryRouter
      .route('/categories/:_id/:image')
      .get(_categoryControlle.sendCategoryImage);

    categoryRouter
      .route('/categories/:_id')
      .delete(_categoryControlle.delete)
      .put(_categoryControlle.put);
    return categoryRouter;
  }
}
