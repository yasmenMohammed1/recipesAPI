import { BaseService } from './base.service';
import { Categories } from '../models/categories.model';
import { CategoryRepo } from '../repositories/Category.repo';
export class CategoryService extends BaseService<Categories> {
  _repoobj = new CategoryRepo();
}
