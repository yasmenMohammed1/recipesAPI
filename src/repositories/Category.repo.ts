import { Categories, CategoryModel } from '../models/categories.model';
import { BaseRebo } from './Base.repo';

export class CategoryRepo extends BaseRebo<Categories> {
  _collectionName: string = 'categories';
  _model = CategoryModel;
  _populate: string = 'recipes';
}
