import { User, UserModel } from '../models/User.model';
import { BaseRebo } from './Base.repo';

export class UserRepo extends BaseRebo<User> {
  _collectionName: string = 'User';
  _model = UserModel;

  _populate = 'recipes';
}
