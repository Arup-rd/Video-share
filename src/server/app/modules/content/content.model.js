import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';
import { Crud } from '@utl';

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CategoryModel'
  }],
  description: {
    type: String
  },
  tags: [{
    type: String
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel'
  },
  file: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'filesModel',
    required: true
  },
  thumbnail: {
    type: String
  },
  price: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel'
  }],
  comments: [{
    type: String // Ignore it -> InCompleted
  }],
  contentType: {
    type: String,
    required: true,
    enum: ['Video', 'video', 'Image', 'image']
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
