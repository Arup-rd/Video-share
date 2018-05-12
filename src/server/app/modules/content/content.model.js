import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';
import { Crud } from '@utl';

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CategoryModel',
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel'
  },
  parmalink: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String
  }
});

// contentSchema.plugin(uniqueValidator);
contentSchema.plugin(timestamp);

const contentModel = mongoose.model('contentModel', contentSchema);
const contentCrud = new Crud(contentModel);

export {
  contentCrud,
  contentModel
};
