'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentModel = exports.contentCrud = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require('mongoose-timestamp');

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _utility = require('../../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import uniqueValidator from 'mongoose-unique-validator';
const contentSchema = new _mongoose2.default.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'CategoryModel',
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: _mongoose2.default.Schema.Types.ObjectId,
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
contentSchema.plugin(_mongooseTimestamp2.default);

const contentModel = _mongoose2.default.model('contentModel', contentSchema);
const contentCrud = new _utility.Crud(contentModel);

exports.contentCrud = contentCrud;
exports.contentModel = contentModel;