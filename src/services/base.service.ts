import mongoose from 'mongoose';
import { BaseRebo } from '../repositories/Base.repo';
export abstract class BaseService<schema> {
  abstract readonly _repoobj: BaseRebo<schema>;
  async findAll(filter: Object) {
    try {
      const docs = await this._repoobj.findAll(filter);
      return { data: docs };
    } catch (error: Error | any) {
      throw new Error(error.message);
    }
  }
  async findOneImage(_id: any) {
    try {
      const docs = await this._repoobj.findImage(_id);
      return docs;
    } catch (error: Error | any) {
      throw new Error(error.message);
    }
  }

  async findOne(_id: any) {
    try {
      const docs = await this._repoobj.find(_id);
      return { data: docs };
    } catch (error: Error | any) {
      throw new Error(error.message);
    }
  }
  async createOne(data: schema) {
    try {
      const docs = await this._repoobj.create(data);

      return { data: docs };
    } catch (error: Error | any) {
      throw new Error(error.message);
    }
  }

  async updateOne(userId: any, _id: any, data: any) {
    try {
      const docs = await this._repoobj.updateOne(userId, _id, data);
      return { data: docs };
    } catch (error: Error | any) {
      throw new Error(error.message);
    }
  }
  async deleteOne(_id: mongoose.Types.ObjectId) {
    try {
      const docs = await this._repoobj.deleteOne(_id);
      return { data: docs };
    } catch (error: Error | any) {
      throw new Error(error.message);
    }
  }
}
