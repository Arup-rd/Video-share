import { compareSync } from 'bcryptjs';
import { generateJwt } from '@utl';
import { OrderCrud } from './order.model';

let Order;
let VerifyOrder;
let OrderNew;
// const { 0: secret } = config.get('secret');
let token;


const OrderSingle = async (ctx) => {
  try {
    Order = await OrderCrud.single({
      qr: { _id: ctx.params.id },
      select: '-password'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      Order
    };
  }
};

const myAccount = async (ctx) => {
  try {
    Order = await OrderCrud.single({
      qr: { _id: ctx.state.Order.uid },
      populate: 'contents'
    });
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      Order,
      message: 'Your Accound Found...'
    };
  }
};

const OrderCreate = async (ctx) => {
  // console.log(ctx.request.body);
  try {
    OrderNew = await OrderCrud.create(ctx.request.body);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    token = await generateJwt({
      uid: OrderNew._id
    });
    ctx.body = {
      acc_type: OrderNew.acc_type,
      token,
      message: 'SignUp Successfull...'
    };
  }
};

const OrderLogin = async (ctx) => {
  Order = await OrderCrud.single({
    qr: { email: ctx.request.body.email }
  });
  try {
    if (Order) {
      VerifyOrder = await compareSync(ctx.request.body.password, Order.password);
    }
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    if (VerifyOrder) {
      token = await generateJwt({
        uid: Order._id
      });
      ctx.body = {
        acc_type: Order.acc_type,
        token,
        message: 'Login Successfull...'
      };
    }
  }
};

const OrderUpdate = async (ctx) => {
  try {
    Order = await OrderCrud.put({
      params: {
        qr: { _id: ctx.state.Order.uid }
      },
      body: ctx.request.body
    });
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      Order,
      message: 'Your account successfully updated'
    };
  }
};

const OrderDelete = async (ctx) => {
  try {
    Order = await OrderCrud.delete({
      params: {
        qr: { _id: ctx.state.Order.uid }
      }
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      message: 'Your account successfully deleted'
    };
  }
};

export {
  OrderSingle,
  OrderCreate,
  OrderUpdate,
  OrderDelete,
  OrderLogin,
  myAccount
};
