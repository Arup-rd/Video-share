import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';
// import { genSaltSync, hashSync } from 'bcryptjs';
import { Crud } from '@utl';

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  file: [{
    type: String
  }]
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'userModel'
  // }
});

OrderSchema.plugin(uniqueValidator);
OrderSchema.plugin(timestamp);

const OrderModel = mongoose.model('OrderModel', OrderSchema);
const OrderCrud = new Crud(OrderModel);

export {
  OrderCrud,
  OrderModel
};
