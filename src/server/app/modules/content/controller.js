import { contentCrud } from './content.model';
import { userCrud } from '../user/user.model';


let content;
let contentNew;
let user;
let isMatched;

const filterContent = async (ctx) => {
  try {
    content = await contentCrud.get({
      qr: { category: ctx.params.filter },
      populate: 'author category'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};

const contentCategory = async (ctx) => {
  try {
    content = await contentCrud.get({
      select: 'category -_id',
      populate: 'category'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};

const contentAll = async (ctx) => {
  try {
    content = await contentCrud.get({
      populate: 'author'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};

const myContent = async (ctx) => {
  try {
    content = await userCrud.single({
      qr: { _id: ctx.state.user.uid },
      select: 'contents -_id',
      populate: 'contents'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content.contents;
  }
};

const userContent = async (ctx) => {
  try {
    content = await userCrud.single({
      qr: { username: ctx.params.user },
      select: 'contents -_id',
      populate: 'contents'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};

const contentSingle = async (ctx) => {
  try {
    content = await contentCrud.single({
      qr: { _id: ctx.params.id },
      populate: 'author'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};

const contentCreate = async (ctx) => {
  console.log(ctx.request.body);
  const contentData = Object.assign({
    author: ctx.state.user.uid
  }, ctx.request.body);
  try {
    contentNew = await contentCrud.create(contentData);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    try {
      user = await userCrud.single({
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
};

const contentUpdate = async (ctx) => {
  try {
    user = await userCrud.single({
      qr: { _id: ctx.state.user.uid }
    });
    isMatched = user.contents.indexOf(ctx.params.id);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    if (isMatched !== -1) {
      try {
        content = await contentCrud.put({
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
};

const contentDelete = async (ctx) => {
  try {
    user = await userCrud.single({
      qr: { _id: ctx.state.user.uid }
    });
    isMatched = user.contents.indexOf(ctx.params.id);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    if (isMatched !== -1) {
      try {
        content = await contentCrud.delete({
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
};

export {
  contentAll,
  contentSingle,
  contentCreate,
  contentUpdate,
  contentDelete,
  myContent,
  userContent,
  filterContent,
  contentCategory
};
