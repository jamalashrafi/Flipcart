const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const menSchema = new Schema(
  {
    Men: Array,
  },
  { collection: 'Men' }
);

const MenModel = mongoose.model('Men', menSchema);

module.exports = MenModel;
