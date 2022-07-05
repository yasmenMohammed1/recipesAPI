import mongoose, { model } from 'mongoose';
export abstract class BaseRebo<schema> {
  abstract readonly _collectionName: string;
  abstract readonly _model: Object;
  readonly _populate: string = '';
  findAll(filter: Object = '') {
    return new Promise((res, rej) => {
      model(this._collectionName)
        .find(filter)
        .populate(this._populate)
        .exec((err, docs) => {
          if (err) rej(err);
          else {
            res(docs);

            console.log("'nrew recipe',", this._collectionName);
          }
        });
    });
  }
  findImage(_id: mongoose.Types.ObjectId) {
    return new Promise(async (res, rej) => {
      model(this._collectionName)
        .find({ _id }, { image: 1, _id: 0 })
        .exec((err, docs) => {
          if (err) rej(err);
          console.log(docs.values());
          res(docs[0]);
        });
    });
  }
  find(_id: mongoose.Types.ObjectId) {
    return new Promise(async (res, rej) => {
      await model(this._collectionName)
        .findById({ _id, image: 1 })
        .populate({ path: this._populate })
        .exec((err, docs) => {
          if (err) rej(err);
          res(docs);
        });
    });
  }
  create(data: schema) {
    return new Promise(async (res, rej) => {
      await model(this._collectionName)
        .create(data)
        .then(
          (doc) => {
            res(doc);
          },
          (err) => {
            console.log(data);

            rej(err);
          }
        );
    });
  }
  updateOne(
    _id: mongoose.Types.ObjectId,

    data: {},
    modelName = this._collectionName
  ) {
    return new Promise(async (res, rej) => {
      const user: any = await model('users').findById(_id);
      if (user) {
        model(modelName)
          .findByIdAndUpdate(_id, data)
          .exec((err, doc) => {
            if (err) rej(err);
            console.log(doc);

            res(data);
          });
      } else {
        throw new Error('something is wrong' + user.recipes + `recipe:`);
      }
    });
  }
  addRecipe(
    data: any,
    userID: mongoose.Types.ObjectId,
    categoryID: mongoose.Types.ObjectId
  ) {
    return new Promise(async (res, rej) => {
      const user: any = await model('User').findById(userID);
      const category: any = await model('Category').findById(categoryID);
      if (user && category) {
        model('Category')
          .updateOne(categoryID, { $push: { recipes: data } })

          .exec((err, doc) => {
            if (err) rej(err);
            console.log(doc);

            res(data);
          });
      } else {
        throw new Error('something is wrong' + user.recipes + `recipe:`);
      }
    });
  }
  deleteOne(_id: mongoose.Types.ObjectId) {
    return new Promise((res, rej) => {
      model(this._collectionName)
        .findByIdAndDelete(_id)
        .exec((err, doc) => {
          if (err) rej(err);
          res(doc);
        });
    });
  }
}
