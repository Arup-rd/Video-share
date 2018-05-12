import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';
import { genSaltSync, hashSync } from 'bcryptjs';
import { Crud } from '@utl';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  acc_type: {
    type: String,
    default: 'ordinary'
  },
  contents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'contentModel'
  }],
  social: {
    facebook: {
      id: String,
      token: String
    },
    google: {
      id: String,
      token: String
    },
    twitter: {
      id: String,
      token: String
    },
    linkedin: {
      id: String,
      token: String
    },
    github: {
      id: String,
      token: String
    }
  }
});

userSchema.pre('save', function hashPass(next) {
  const account = this;
  let hash;
  if (this.isModified('password') || this.isNew) {
    try {
      const salt = genSaltSync();
      hash = hashSync(account.password, salt);
    } catch (e) {
      return next(e);
    } finally {
      account.password = hash;
    }
  }
  return next();
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(timestamp);

const userModel = mongoose.model('userModel', userSchema);
const userCrud = new Crud(userModel);

export {
  userCrud,
  userModel
};
