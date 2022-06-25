import { NextFunction, Request, response, Response } from 'express';
import mongoose from 'mongoose';
import { Categories } from '../models/categories.model';
import { CategoryService } from '../services/Category.service';
import { BaseController } from './base.controller';
import path from 'path';
export class CategoryController extends BaseController<Categories> {
  _serviceObj = new CategoryService();
  async sendCategoryImage(req: Request, res: Response, next: NextFunction) {
    const _id = new mongoose.Types.ObjectId(req.params._id);
    const image = req.params.image;
    // const uid = req.params.uid;
    try {
      const category = await new CategoryService().findOne(_id);

      res.sendFile(path.resolve(__dirname + '../../../uploads/' + image)); //   res.sendFile('../../uploads' + category);
    } catch (err) {
      next(err);
    }
  }
}
