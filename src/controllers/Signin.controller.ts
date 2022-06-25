import { User } from 'models/User.model';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { UserService } from './../services/User.service';
import { JwtChecking } from './../middleware/Auth';
import mongoose from 'mongoose';

const jwtChecking = new JwtChecking();

export class SigninController {
  _serviceObj = new UserService();

  getAuth = async (req: Request, res: Response, next: NextFunction) => {
    const _id = new mongoose.Types.ObjectId(req.params._id);
    try {
      {
        const user: User | any = await this._serviceObj.findOne(_id);

        console.log(user?.data.password);
        console.log(req.body.password);

        bcrypt.compareSync(req.body.password, user.data.password);
        const token = jwtChecking.signinJwt(user.data);
        res.status(200).json({ user, token });
      }
      res.status(401).send('unauthorized');
    } catch (err) {
      next(err);
    }
  };
}
