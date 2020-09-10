const MenuModel = require('../models/menu');

exports.listMenu = (req, res) => {
  console.log('In menu Route');
  MenuModel.find({}, (err, results) => {
    if (err) res.send(err);
    res.send(results);
  });
};
