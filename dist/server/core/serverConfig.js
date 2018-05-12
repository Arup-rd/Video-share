'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _koaBody = require('koa-body');

var _koaBody2 = _interopRequireDefault(_koaBody);

var _koaSession = require('koa-session');

var _koaSession2 = _interopRequireDefault(_koaSession);

var _koaHelmet = require('koa-helmet');

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaMount = require('koa-mount');

var _koaMount2 = _interopRequireDefault(_koaMount);

var _koaHistoryApiFallback = require('koa-history-api-fallback');

var _koaHistoryApiFallback2 = _interopRequireDefault(_koaHistoryApiFallback);

var _app = require('../app');

var _errorConfig = require('./errorConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function baseConfig(app) {
  app.keys = _config2.default.get('secret');
  app.proxy = true;

  app.use(_koaConvert2.default.compose(_errorConfig.catchErr, (0, _kcors2.default)({
    credentials: true,
    origin: true
  }), (0, _koaBody2.default)({
    multipart: true,
    formLimit: _config2.default.get('file.size')
  }), (0, _koaSession2.default)({
    maxAge: 21600000
  }, app), (0, _koaHelmet2.default)(), _errorConfig.statusMessage));

  (0, _app.cModules)(app);
  // app.use(cMiddleware());

  app.use(_koaConvert2.default.compose((0, _koaHistoryApiFallback2.default)(),
  // mount(serve(config.get('paths.dist.server'))),
  (0, _koaMount2.default)((0, _koaStatic2.default)(_config2.default.get('paths.static')))));
}

exports.default = baseConfig;