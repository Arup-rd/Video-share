import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';
import { genSaltSync, hashSync } from 'bcryptjs';
import { Crud } from '@utl';

const OrderSchema = new mongoose.Schema({
  description : {
    type : String,
    required : true
  },
  file : [{
    type : String
  }]
});

OrderSchema.plugin(uniqueValidator);
OrderSchema.plugin(timestamp);

const OrderModel = mongoose.model('OrderModel', OrderSchema);
const OrderCrud = new Crud(OrderModel);

export {
  OrderCrud,
  OrderModel
};
