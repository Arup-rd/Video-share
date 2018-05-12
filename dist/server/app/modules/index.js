'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _user = require('./user');

var _content = require('./content');

var _category = require('./category');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const routerControllPros = [_user.UserRouteProps, _content.ContentRouteProps, _category.CategoryRouteProps];

let instance;

const routerControl = app => {
  routerControllPros.forEach(routeProperty => {
    instance = new _koaRouter2.default({ prefix: routeProperty.baseUrl });
    routeProperty.routes.forEach(config => {
      const {
        method = '',
        route = '',
        handlers = []
      } = config;

      const lastHandler = handlers.pop();

      instance[method.toLowerCase()](route, ...handlers, (() => {
        var _ref = _asyncToGenerator(function* (ctx) {
          const hddd = yield lastHandler(ctx);
          return hddd;
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      })());

      app.use(instance.routes()).use(instance.allowedMethods());
    });
  });
};

exports.default = routerControl;