'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusMessage = exports.catchErr = undefined;

var _fp = require('lodash/fp');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const catchErr = exports.catchErr = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    try {
      yield next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = {
        message: err.toString()
      };
    }
  });

  return function catchErr(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const statusMsg = {
  400: 'Entity not found and will not proceed',
  401: 'Not authorized',
  403: 'Forbidden',
  404: 'Resource not found',
  405: 'Method not allowed',
  409: 'Record conflict',
  422: 'Unprocessable entity',
  429: 'Too many requests.'
};

const statusMessage = exports.statusMessage = (() => {
  var _ref2 = _asyncToGenerator(function* (ctx, next) {
    yield next();

    if ((0, _fp.has)(ctx.status, statusMsg)) {
      const { status } = ctx;
      ctx.body = {
        message: statusMsg[status]
      };
      ctx.status = status;
    }
  });

  return function statusMessage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})();