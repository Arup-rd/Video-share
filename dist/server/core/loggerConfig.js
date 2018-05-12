'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appLogger;

var _isdev = require('isdev');

var _isdev2 = _interopRequireDefault(_isdev);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function appLogger(app) {
  if (_isdev2.default) {
    _log4js2.default.configure({
      appenders: {
        console: {
          type: 'console',
          layout: {
            type: 'coloured'
          }
        }
      },
      categories: {
        default: {
          appenders: ['console'],
          level: ['all']
        }
      }
    });
    app.use((0, _koaConvert2.default)((0, _koaLogger2.default)()));
  }
}