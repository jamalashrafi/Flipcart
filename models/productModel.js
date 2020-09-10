const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: false },
    company: { type: String, required: true },
    category: { type: String, required: true },
    rate: { type: Number, default: 0 },
    quantity: { type: Number, default: 0, required: true },
    ratings: { type: Number, default: 10, required: true },
    numReveiws: { type: Number, default: 10 },
    subCategory: { type: String, required: true },
    discount: { type: Number, default: 0 },
    size: { type: Array },
  },
  { collection: 'Products' }
);

const productModel = mongoose.model('Products', productSchema);

module.exports = productModel;
