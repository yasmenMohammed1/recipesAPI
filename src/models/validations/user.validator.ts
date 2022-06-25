import Joi, { string } from 'joi';
import { NextFunction, Response, Request } from 'express';
export class UserValidator {
  async post(req: Request, res: Response, next: NextFunction): Promise<void> {
    const schema = Joi.object({
      firstName: Joi.string().min(5),
      lastName: Joi.string().min(5),
      email: Joi.string().email({ tlds: { allow: false } }),
      password: Joi.string().required(),
      recipes: Joi.array().items(Joi.string())
    });
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
}
