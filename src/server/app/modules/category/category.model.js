import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';
import { Crud } from '@utl';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: true
  }
});

CategorySchema.plugin(uniqueValidator);
CategorySchema.plugin(timestamp);

const CategoryModel = mongoose.model('CategoryModel', CategorySchema);
const CategoryCrud = new Crud(CategoryModel);

export {
  CategoryCrud,
  CategoryModel
};
