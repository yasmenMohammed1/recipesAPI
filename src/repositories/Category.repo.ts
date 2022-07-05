import { Categories, CategoryModel } from '../models/categories.model';
import { BaseRebo } from './Base.repo';

export class CategoryRepo extends BaseRebo<Categories> {
  _collectionName: string = 'Category';
  _model = CategoryModel;
  _populate = 'recipes';
}
