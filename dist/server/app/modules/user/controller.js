'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myAccount = exports.userLogin = exports.userDelete = exports.userUpdate = exports.userCreate = exports.userSingle = undefined;

var _bcryptjs = require('bcryptjs');

var _utility = require('../../utility');

var _user = require('./user.model');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let user;
let VerifyUser;
let userNew;
// const { 0: secret } = config.get('secret');
let token;

const userSingle = (() => {
  var _ref = _asyncToGenerator(function* (ctx) {
    try {
      user = yield _user.userCrud.single({
        qr: { _id: ctx.params.id },
        select: '-password'
      });
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      ctx.body = {
        user
      };
    }
  });

  return function userSingle(_x) {
    return _ref.apply(this, arguments);
  };
})();

const myAccount = (() => {
  var _ref2 = _asyncToGenerator(function* (ctx) {
    try {
      user = yield _user.userCrud.single({
        qr: { _id: ctx.state.user.uid },
        populate: 'contents'
      });
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      ctx.body = {
        user,
        message: 'Your Accound Found...'
      };
    }
  });

  return function myAccount(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

const userCreate = (() => {
  var _ref3 = _asyncToGenerator(function* (ctx) {
    // console.log(ctx.request.body);
    try {
      userNew = yield _user.userCrud.create(ctx.request.body);
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      token = yield (0, _utility.generateJwt)({
        uid: userNew._id
      });
      ctx.body = {
        acc_type: userNew.acc_type,
        token,
        message: 'SignUp Successfull...'
      };
    }
  });

  return function userCreate(_x3) {
    return _ref3.apply(this, arguments);
  };
})();

const userLogin = (() => {
  var _ref4 = _asyncToGenerator(function* (ctx) {
    user = yield _user.userCrud.single({
      qr: { email: ctx.request.body.email }
    });
    try {
      if (user) {
        VerifyUser = yield (0, _bcryptjs.compareSync)(ctx.request.body.password, user.password);
      }
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      if (VerifyUser) {
        token = yield (0, _utility.generateJwt)({
          uid: user._id
        });
        ctx.body = {
          acc_type: user.acc_type,
          token,
          message: 'Login Successfull...'
        };
      }
    }
  });

  return function userLogin(_x4) {
    return _ref4.apply(this, arguments);
  };
})();

const userUpdate = (() => {
  var _ref5 = _asyncToGenerator(function* (ctx) {
    try {
      user = yield _user.userCrud.put({
        params: {
          qr: { _id: ctx.state.user.uid }
        },
        body: ctx.request.body
      });
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      ctx.body = {
        user,
        message: 'Your account successfully updated'
      };
    }
  });

  return function userUpdate(_x5) {
    return _ref5.apply(this, arguments);
  };
})();

const userDelete = (() => {
  var _ref6 = _asyncToGenerator(function* (ctx) {
    try {
      user = yield _user.userCrud.delete({
        params: {
          qr: { _id: ctx.state.user.uid }
        }
      });
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      ctx.body = {
        message: 'Your account successfully deleted'
      };
    }
  });

  return function userDelete(_x6) {
    return _ref6.apply(this, arguments);
  };
})();

exports.userSingle = userSingle;
exports.userCreate = userCreate;
exports.userUpdate = userUpdate;
exports.userDelete = userDelete;
exports.userLogin = userLogin;
exports.myAccount = myAccount;