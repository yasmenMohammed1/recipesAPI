import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { BaseService } from '../services/base.service';
export abstract class BaseController<schema> {
  abstract readonly _serviceObj: BaseService<schema>;
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._serviceObj.findAll({});
      res.status(200).json(data.data);
    } catch (err) {
      console.log(err + 'dd');
      next(err);
    }
  };
  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._serviceObj.findOne(
        new mongoose.Types.ObjectId(req.params._id)
      );
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
  put = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params._id;
      const recipeId = req.params._recipeId;
      const data = await this._serviceObj.updateOne(
        new mongoose.Types.ObjectId(userId),

        new mongoose.Types.ObjectId(recipeId),
        req.body
      );
      console.log(`recipe id from controller` + data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
  post = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._serviceObj.createOne(req.body);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._serviceObj.deleteOne(
        new mongoose.Types.ObjectId(req.params._id)
      );
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
}
