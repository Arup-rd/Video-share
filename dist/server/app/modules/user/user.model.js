'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userModel = exports.userCrud = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

var _mongooseTimestamp = require('mongoose-timestamp');

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _bcryptjs = require('bcryptjs');

var _utility = require('../../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = new _mongoose2.default.Schema({
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
    type: _mongoose2.default.Schema.Types.ObjectId,
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
      const salt = (0, _bcryptjs.genSaltSync)();
      hash = (0, _bcryptjs.hashSync)(account.password, salt);
    } catch (e) {
      return next(e);
    } finally {
      account.password = hash;
    }
  }
  return next();
});

userSchema.plugin(_mongooseUniqueValidator2.default);
userSchema.plugin(_mongooseTimestamp2.default);

const userModel = _mongoose2.default.model('userModel', userSchema);
const userCrud = new _utility.Crud(userModel);

exports.userCrud = userCrud;
exports.userModel = userModel;