'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentCategory = exports.filterContent = exports.userContent = exports.myContent = exports.contentDelete = exports.contentUpdate = exports.contentCreate = exports.contentSingle = exports.contentAll = undefined;

var _content = require('./content.model');

var _user = require('../user/user.model');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let content;
let contentNew;
let user;
let isMatched;

const filterContent = (() => {
  var _ref = _asyncToGenerator(function* (ctx) {
    try {
      content = yield _content.contentCrud.get({
        qr: { category: ctx.params.filter },
        populate: 'author category'
      });
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      ctx.body = content;
    }
  });

  return function filterContent(_x) {
    return _ref.apply(this, arguments);
  };
})();

const contentCategory = (() => {
  var _ref2 = _asyncToGenerator(function* (ctx) {
    try {
      content = yield _content.contentCrud.get({
        select: 'category -_id',
        populate: 'category'
      });
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      ctx.body = content;
    }
  });

  return function contentCategory(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

const contentAll = (() => {
  var _ref3 = _asyncToGenerator(function* (ctx) {
    try {
      content = yield _content.contentCrud.get({
        populate: 'author'
      });
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      ctx.body = content;
    }
  });

  return function contentAll(_x3) {
    return _ref3.apply(this, arguments);
  };
})();

const myContent = (() => {
  var _ref4 = _asyncToGenerator(function* (ctx) {
    try {
      content = yield _user.userCrud.single({
        qr: { _id: ctx.state.user.uid },
        select: 'contents -_id',
        populate: 'contents'
      });
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      ctx.body = content.contents;
    }
  });

  return function myContent(_x4) {
    return _ref4.apply(this, arguments);
  };
})();

const userContent = (() => {
  var _ref5 = _asyncToGenerator(function* (ctx) {
    try {
      content = yield _user.userCrud.single({
        qr: { username: ctx.params.user },
        select: 'contents -_id',
        populate: 'contents'
      });
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      ctx.body = content;
    }
  });

  return function userContent(_x5) {
    return _ref5.apply(this, arguments);
  };
})();

const contentSingle = (() => {
  var _ref6 = _asyncToGenerator(function* (ctx) {
    try {
      content = yield _content.contentCrud.single({
        qr: { _id: ctx.params.id },
        populate: 'author'
      });
    } catch (e) {
      ctx.throw(404, e.message);
    } finally {
      ctx.body = content;
    }
  });

  return function contentSingle(_x6) {
    return _ref6.apply(this, arguments);
  };
})();

const contentCreate = (() => {
  var _ref7 = _asyncToGenerator(function* (ctx) {
    console.log(ctx.request.body);
    const contentData = Object.assign({
      author: ctx.state.user.uid
    }, ctx.request.body);
    try {
      contentNew = yield _content.contentCrud.create(contentData);
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      try {
        user = yield _user.userCrud.single({
          qr: { _id: ctx.state.user.uid }
        });
      } catch (e) {
        ctx.throw(422, e.message);
      } finally {
        user.contents.push(contentNew._id);
        user.save();
        ctx.body = {
          body: contentNew,
          message: 'Post is successful'
        };
      }
    }
  });

  return function contentCreate(_x7) {
    return _ref7.apply(this, arguments);
  };
})();

const contentUpdate = (() => {
  var _ref8 = _asyncToGenerator(function* (ctx) {
    try {
      user = yield _user.userCrud.single({
        qr: { _id: ctx.state.user.uid }
      });
      isMatched = user.contents.indexOf(ctx.params.id);
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      if (isMatched !== -1) {
        try {
          content = yield _content.contentCrud.put({
            params: {
              qr: { _id: ctx.params.id }
            },
            body: ctx.request.body
          });
        } catch (e) {
          ctx.throw(422, e.message);
        } finally {
          ctx.body = {
            body: content,
            message: 'Post Updated..'
          };
        }
      } else {
        ctx.body = {
          message: 'Sorry you don\'t have right to edit this'
        };
      }
    }
  });

  return function contentUpdate(_x8) {
    return _ref8.apply(this, arguments);
  };
})();

const contentDelete = (() => {
  var _ref9 = _asyncToGenerator(function* (ctx) {
    try {
      user = yield _user.userCrud.single({
        qr: { _id: ctx.state.user.uid }
      });
      isMatched = user.contents.indexOf(ctx.params.id);
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      if (isMatched !== -1) {
        try {
          content = yield _content.contentCrud.delete({
            params: {
              qr: { _id: ctx.params.id }
            }
          });
        } catch (e) {
          ctx.throw(422, e.message);
        } finally {
          ctx.body = {
            body: content,
            message: 'Deleted'
          };
        }
      } else {
        ctx.body = {
          message: 'Sorry you don\'t have right to delete this'
        };
      }
    }
  });

  return function contentDelete(_x9) {
    return _ref9.apply(this, arguments);
  };
})();

exports.contentAll = contentAll;
exports.contentSingle = contentSingle;
exports.contentCreate = contentCreate;
exports.contentUpdate = contentUpdate;
exports.contentDelete = contentDelete;
exports.myContent = myContent;
exports.userContent = userContent;
exports.filterContent = filterContent;
exports.contentCategory = contentCategory;