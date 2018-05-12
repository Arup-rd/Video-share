'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshMid = exports.isAuthenticated = undefined;

var _utility = require('../utility');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let token;
let decode;

const isAuthenticated = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    try {
      token = ctx.request.headers.authorization;
      decode = yield (0, _utility.jwtVerify)(token);
    } catch (e) {
      ctx.throw(401, e.message);
    } finally {
      if (!decode) {
        ctx.throw(401, { message: 'Token has expired' });
      }
      ctx.state.user = decode;
      yield next();
    }
  });

  return function isAuthenticated(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const refreshMid = (() => {
  var _ref2 = _asyncToGenerator(function* (ctx, next) {
    try {
      token = ctx.request.headers.authorization;
      decode = yield (0, _utility.jwtVerify)(token);
    } catch (e) {
      console.log(e.name); //eslint-disable-line
    } finally {
      if (!decode) {
        ctx.throw(401, { message: 'Token has expired' });
      }
      ctx.state.user = decode;
      ctx.state.user.token = token;
      yield next();
    }
  });

  return function refreshMid(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})();

exports.isAuthenticated = isAuthenticated;
exports.refreshMid = refreshMid;