'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class Crud {
  constructor(model) {
    this.model = model;
  }

  get(options) {
    return new Promise((resolve, reject) => {
      this.model.find(options ? options.qr : {}).select(options ? options.select ? options.select : {} : {}) //eslint-disable-line
      .populate(options ? options.populate ? options.populate : '' : '') //eslint-disable-line
      .exec().then(result => {
        resolve(result);
      }).catch(e => {
        reject(e);
      });
    });
  }

  single(options) {
    return new Promise((resolve, reject) => {
      this.model.findOne(options ? options.qr : {}).select(options ? options.select ? options.select : {} : {}) //eslint-disable-line
      .populate(options ? options.populate ? options.populate : '' : '') //eslint-disable-line
      .exec().then(result => {
        resolve(result);
      }).catch(e => {
        reject(e);
      });
    });
  }

  put(options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const record = yield _this.single(options.params);
      Object.assign(record, options.body);
      return new Promise(function (resolve, reject) {
        record.save().then(function (result) {
          resolve(result);
        }).catch(function (e) {
          reject(e);
        });
      });
    })();
  }

  delete(options) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const record = yield _this2.single(options.params);
      return new Promise(function (resolve, reject) {
        record.remove().then(function (result) {
          resolve(result);
        }).catch(function (e) {
          reject(e);
        });
      });
    })();
  }

  create(options) {
    return new Promise((resolve, reject) => {
      this.model.create(options).then(result => {
        resolve(result);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
exports.default = Crud;