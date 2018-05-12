'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryModel = exports.CategoryCrud = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

var _mongooseTimestamp = require('mongoose-timestamp');

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _utility = require('../../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CategorySchema = new _mongoose2.default.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: true
  }
});

CategorySchema.plugin(_mongooseUniqueValidator2.default);
CategorySchema.plugin(_mongooseTimestamp2.default);

const CategoryModel = _mongoose2.default.model('CategoryModel', CategorySchema);
const CategoryCrud = new _utility.Crud(CategoryModel);

exports.CategoryCrud = CategoryCrud;
exports.CategoryModel = CategoryModel;