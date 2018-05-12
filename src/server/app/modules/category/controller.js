import { CategoryCrud } from './category.model';


let Category;
let CategoryNew;

const CategoryAll = async (ctx) => {
  try {
    Category = await CategoryCrud.get();
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = Category;
  }
};

const CategorySingle = async (ctx) => {
  try {
    Category = await CategoryCrud.single({
      qr: { _id: ctx.params.id }
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = Category;
  }
};

const CategoryCreate = async (ctx) => {
  try {
    CategoryNew = await CategoryCrud.create(ctx.request.body);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = CategoryNew;
  }
};

const CategoryUpdate = async (ctx) => {
  try {
    Category = await CategoryCrud.put({
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
};

const CategoryDelete = async (ctx) => {
  try {
    Category = await CategoryCrud.delete({
      params: {
        qr: { _id: ctx.params.id }
      }
    });
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = Category;
  }
};

export {
  CategoryAll,
  CategorySingle,
  CategoryCreate,
  CategoryUpdate,
  CategoryDelete
};
