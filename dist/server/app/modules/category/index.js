'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryModel = exports.CategoryController = exports.CategoryRouteProps = undefined;

var _router = require('./router');

var _CategoryRouteProps = _interopRequireWildcard(_router);

var _controller = require('./controller');

var _CategoryController = _interopRequireWildcard(_controller);

var _category = require('./category.model');

var _CategoryModel = _interopRequireWildcard(_category);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.CategoryRouteProps = _CategoryRouteProps;
exports.CategoryController = _CategoryController;
exports.CategoryModel = _CategoryModel;