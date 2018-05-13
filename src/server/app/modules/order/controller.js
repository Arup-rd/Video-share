import nodemailer from 'nodemailer';
import { OrderCrud } from './order.model';

let Order;
let OrderNew;
let order;
let transporter;
let mailOptions;
// const { 0: secret } = config.get('secret');


const OrderSingle = async (ctx) => {
  try {
    Order = await OrderCrud.single({
      qr: { _id: ctx.params.id }
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      Order
    };
  }
};


const OrderCreate = async (ctx) => {
  try {
    OrderNew = await OrderCrud.create(ctx.request.body);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'applicationreact@gmail.com',
        pass: 'go@way#54321'
      }
    });

    mailOptions = {
      from: ctx.request.body.email,
      to: 'applicationreact@gmail.com', // Admin Email Will Be Here
      subject: `${ctx.request.body.name} want a custom video`,
      text: ctx.request.body.description
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
    ctx.body = {
      body: OrderNew,
      message: 'SuccesFully Add new Order'
    };
  }
};


// const OrderUpdate = async (ctx) => {
//   try {
//     user = await userCrud.single({
//       qr: { _id: ctx.state.user.uid }
//     });
//     isMatched = user.order.indexOf(ctx.params.id);
//   } catch (e) {
//     ctx.throw(422, e.message);
//   } finally {
//     if (isMatched !== -1) {
//       try {
//         order = await OrderCrud.put({
//           params: {
//             qr: { _id: ctx.params.id }
//           },
//           body: ctx.request.body
//         });
//       } catch (e) {
//         ctx.throw(422, e.message);
//       } finally {
//         ctx.body = {
//           body: order,
//           message: 'Post Updated..'
//         };
//       }
//     } else {
//       ctx.body = {
//         message: 'Sorry you don\'t have right to edit this'
//       };
//     }
//   }
// };

// const OrderDelete = async (ctx) => {
//   try {
//     user = await userCrud.single({
//       qr: { _id: ctx.state.user.uid }
//     });
//     isMatched = user.order.indexOf(ctx.params.id);
//   } catch (e) {
//     ctx.throw(422, e.message);
//   } finally {
//     if (isMatched !== -1) {
//       try {
//         order = await OrderCrud.delete({
//           params: {
//             qr: { _id: ctx.params.id }
//           }
//         });
//       } catch (e) {
//         ctx.throw(422, e.message);
//       } finally {
//         ctx.body = {
//           body: order,
//           message: 'Deleted'
//         };
//       }
//     } else {
//       ctx.body = {
//         message: 'Sorry you don\'t have right to delete this'
//       };
//     }
//   }
// };

const OrderAll = async (ctx) => {
  try {
    order = await OrderCrud.get();
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = order;
  }
};

export {
  OrderSingle,
  OrderCreate,
  // OrderUpdate,
  // OrderDelete,
  OrderAll
};
