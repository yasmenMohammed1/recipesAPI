import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
export class RecipeValidtor {
  async post(req: Request, res: Response, next: NextFunction): Promise<void> {
    const schema = Joi.object({
      title: Joi.string().min(5),
      categories: Joi.string().required(),
      ingrediants: Joi.object({ name: Joi.string(), quantity: Joi.string() }),
      recipe: Joi.string(),
      user: Joi.string().required(),
      image: Joi.string().required()
    });
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
}
