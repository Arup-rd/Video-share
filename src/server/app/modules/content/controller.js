import { contentCrud } from './content.model';
import { userCrud } from '../user/user.model';
import { filesCrud } from '../files/files.model';

let content;
let contentNew;
let user;
let isMatched;

const filterContent = async (ctx) => {
  try {
    content = await contentCrud.get({
      qr: {
        category: ctx.params.filter
      },
      populate: 'category file',
      sort: '-createdAt'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};

const ContentDownLoad = async (ctx) => {
  try {
    content = await contentCrud.single({
      qr: { category: ctx.params.contentId }
    });
    if (content.price === 0) {
      user = await userCrud.single({
        qr: {
          id: ctx.state.user.uid
        }
      });
      user.downloads.push(content);
      await user.save();
    } else {
      ctx.body = {
        message: 'To Purchase this you have to subscribe :) '
      };
    }
  } catch (error) {
    ctx.throw = {
      message: 'Sorry you don\'t have right to edit this'
    };
  }
};

const contentCategory = async (ctx) => {
  try {
    content = await contentCrud.get({
      select: 'category -_id',
      sort: '-createdAt',
      populate: 'category file'
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
      populate: 'file category',
      sort: '-createdAt'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};


const contentAllImages = async (ctx) => {
  try {
    content = await contentCrud.get({
      qr: {
        contentType: 'Image'
      },
      populate: 'file category',
      sort: '-createdAt'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};

const contentAllVideos = async (ctx) => {
  try {
    content = await contentCrud.get({
      qr: { contentType: 'Video' },
      populate: 'file category',
      sort: '-createdAt'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};


const VideosWithCat = async (ctx) => {
  try {
    content = await contentCrud.get({
      qr: {
        contentType: 'Video',
        category: ctx.params.category
      },
      populate: 'file category',
      sort: '-createdAt'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};
const ImageWithCat = async (ctx) => {
  try {
    content = await contentCrud.get({
      qr: {
        contentType: 'Image',
        category: ctx.params.category
      },
      populate: 'file category',
      sort: '-createdAt'
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
      populate: 'file category'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = content;
  }
};

const contentCreate = async (ctx) => {
  const contentData = Object.assign({
    author: ctx.state.user.uid
  }, ctx.request.body);
  try {
    contentNew = await contentCrud.create(contentData);
    const file = await filesCrud.single({
      qr: contentNew.file
    });
    contentNew.file = file;
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = contentNew;
  }
};

const UpdateViews = async (ctx) => {
  try {
    content = await contentCrud.put({
      params: {
        qr: { _id: ctx.params.id },
        populate: 'file category'
      },
      body: {
        views: ctx.request.body.views,
        shares: ctx.request.body.shares
      }
    });
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = content;
  }
};

const contentUpdate = async (ctx) => {
  try {
    user = await userCrud.single({
      qr: { _id: ctx.state.user.uid },
      populate: 'file category'
    });
    isMatched = user.acc_type.toLowerCase() === 'admin';
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    if (isMatched) {
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
        ctx.body = content;
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
    isMatched = user.acc_type.toLowerCase() === 'admin';
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    if (isMatched) {
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
  contentCategory,
  ContentDownLoad,
  contentAllImages,
  contentAllVideos,
  VideosWithCat,
  ImageWithCat,
  UpdateViews
};
