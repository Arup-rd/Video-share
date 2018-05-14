import nodemailer from 'nodemailer';
import config from 'config';
import { OrderCrud } from './order.model';

let Order;
let OrderNew;
let order;
let mailOptions;
// const { 0: secret } = config.get('secret');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.get('nodemailer.user'),
    pass: config.get('nodemailer.pass')
  }
});

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

const ContactUs = async (ctx) => {
  mailOptions = {
    from: ctx.request.body.email,
    to: 'applicationreact@gmail.com', // Admin Email Will Be Here
    subject: `${ctx.request.body.name} want a custom video`,
    text: `
      Name: ${ctx.request.body.firstname} ${ctx.request.body.firstname} Send a message\n
      Email: ${ctx.request.body.email}\n
      Phone: ${ctx.request.body.phone}\n
      ${ctx.request.body.description}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
  ctx.body = {
    status: 200,
    message: 'Successfully Sent'
  };
};

const OrderCreate = async (ctx) => {
  try {
    OrderNew = await OrderCrud.create(ctx.request.body);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
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
  OrderAll,
  ContactUs
};
