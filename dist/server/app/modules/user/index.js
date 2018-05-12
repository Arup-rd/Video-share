'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = exports.UserController = exports.UserRouteProps = undefined;

var _router = require('./router');

var _UserRouteProps = _interopRequireWildcard(_router);

var _controller = require('./controller');

var _UserController = _interopRequireWildcard(_controller);

var _user = require('./user.model');

var _UserModel = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.UserRouteProps = _UserRouteProps;
exports.UserController = _UserController;
exports.UserModel = _UserModel;