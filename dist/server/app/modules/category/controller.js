'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryDelete = exports.CategoryUpdate = exports.CategoryCreate = exports.CategorySingle = exports.CategoryAll = undefined;

var _category = require('./category.model');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let Category;
let CategoryNew;

const CategoryAll = (() => {
  var _ref = _asyncToGenerator(function* (ctx) {
    try {
      Category = yield _category.CategoryCrud.get();
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      ctx.body = Category;
    }
  });

  return function CategoryAll(_x) {
    return _ref.apply(this, arguments);
  };
})();

const CategorySingle = (() => {
  var _ref2 = _asyncToGenerator(function* (ctx) {
    try {
      Category = yield _category.CategoryCrud.single({
        qr: { _id: ctx.params.id }
      });
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      ctx.body = Category;
    }
  });

  return function CategorySingle(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

const CategoryCreate = (() => {
  var _ref3 = _asyncToGenerator(function* (ctx) {
    try {
      CategoryNew = yield _category.CategoryCrud.create(ctx.request.body);
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      ctx.body = CategoryNew;
    }
  });

  return function CategoryCreate(_x3) {
    return _ref3.apply(this, arguments);
  };
})();

const CategoryUpdate = (() => {
  var _ref4 = _asyncToGenerator(function* (ctx) {
    try {
      Category = yield _category.CategoryCrud.put({
        params: {
          qr: { _id: ctx.params.id }
        },
        body: ctx.request.body
      });
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      ctx.body = Category;
    }
  });

  return function CategoryUpdate(_x4) {
    return _ref4.apply(this, arguments);
  };
})();

const CategoryDelete = (() => {
  var _ref5 = _asyncToGenerator(function* (ctx) {
    try {
      Category = yield _category.CategoryCrud.delete({
        params: {
          qr: { _id: ctx.params.id }
        }
      });
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      ctx.body = Category;
    }
  });

  return function CategoryDelete(_x5) {
    return _ref5.apply(this, arguments);
  };
})();

exports.CategoryAll = CategoryAll;
exports.CategorySingle = CategorySingle;
exports.CategoryCreate = CategoryCreate;
exports.CategoryUpdate = CategoryUpdate;
exports.CategoryDelete = CategoryDelete;