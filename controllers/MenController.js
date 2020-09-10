const MenModel = require('../models/men');

exports.listMenGoods = (req, res) => {
  MenModel.find({}, (err, results) => {
    if (err) res.send(err);
    res.send(results);
  });
};
