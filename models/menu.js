const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    Menu: {},
  },
  { collection: 'Menu' }
);

const MenuModel = mongoose.model('Menu', menuSchema);

module.exports = MenuModel;
