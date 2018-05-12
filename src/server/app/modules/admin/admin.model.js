import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';
import { Crud } from '@utl';

const adminSchema = new mongoose.Schema({
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
    tag : [{
      type : String
    }],
  price : {
    type : String,
    default : '0'
  },
  like: [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'userModel'
  }],
  comments : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'commentModel'
  }],
  thumbnail: {
    type: String
  }
});

// adminSchema.plugin(uniqueValidator);
adminSchema.plugin(timestamp);

const adminModel = mongoose.model('adminModel', adminSchema);
const adminCrud = new Crud(adminModel);

export {
  adminCrud,
  adminModel
};
