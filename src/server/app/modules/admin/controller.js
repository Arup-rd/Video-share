import { adminCrud } from './admin.model';
import { userCrud } from '../user/user.model';


let admin;
let adminNew;
let user;
let isMatched;

const filteradmin = async (ctx) => {
  try {
    admin = await adminCrud.get({
      qr: { category: ctx.params.filter },
      populate: 'author category'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = admin;
  }
};

const adminCategory = async (ctx) => {
  try {
    admin = await adminCrud.get({
      select: 'category -_id',
      populate: 'category'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = admin;
  }
};

const adminAll = async (ctx) => {
  try {
    admin = await adminCrud.get({
      populate: 'author'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = admin;
  }
};

const myadmin = async (ctx) => {
  try {
    admin = await userCrud.single({
      qr: { _id: ctx.state.user.uid },
      select: 'admins -_id',
      populate: 'admins'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = admin.admins;
  }
};

const useradmin = async (ctx) => {
  try {
    admin = await userCrud.single({
      qr: { username: ctx.params.user },
      select: 'admins -_id',
      populate: 'admins'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = admin;
  }
};

const adminSingle = async (ctx) => {
  try {
    admin = await adminCrud.single({
      qr: { _id: ctx.params.id },
      populate: 'author'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = admin;
  }
};

const adminCreate = async (ctx) => {
  console.log(ctx.request.body);
  const adminData = Object.assign({
    author: ctx.state.user.uid
  }, ctx.request.body);
  try {
    adminNew = await adminCrud.create(adminData);
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
      user.admins.push(adminNew._id);
      user.save();
      ctx.body = {
        body: adminNew,
        message: 'Post is successful'
      };
    }
  }
};

const adminUpdate = async (ctx) => {
  try {
    user = await userCrud.single({
      qr: { _id: ctx.state.user.uid }
    });
    isMatched = user.admins.indexOf(ctx.params.id);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    if (isMatched !== -1) {
      try {
        admin = await adminCrud.put({
          params: {
            qr: { _id: ctx.params.id }
          },
          body: ctx.request.body
        });
      } catch (e) {
        ctx.throw(422, e.message);
      } finally {
        ctx.body = {
          body: admin,
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

const adminDelete = async (ctx) => {
  try {
    user = await userCrud.single({
      qr: { _id: ctx.state.user.uid }
    });
    isMatched = user.admins.indexOf(ctx.params.id);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    if (isMatched !== -1) {
      try {
        admin = await adminCrud.delete({
          params: {
            qr: { _id: ctx.params.id }
          }
        });
      } catch (e) {
        ctx.throw(422, e.message);
      } finally {
        ctx.body = {
          body: admin,
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
  adminAll,
  adminSingle,
  adminCreate,
  adminUpdate,
  adminDelete,
  myadmin,
  useradmin,
  filteradmin,
  adminCategory
};
