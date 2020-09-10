const ProductModel = require('../models/productModel');

exports.listProducts = (req, res) => {
  console.log(`Inside product Controller`);
  console.log('-------------------');
  const { category } = req.query;
  const { subCategory } = req.query;
  const { limit } = req.query;
  const { pageNo } = req.query;
  console.log(pageNo);
  ProductModel.find(
    { $and: [{ category }, { subCategory }] },
    // { limit: 10, skip: parseInt(pageNo, 10) },
    (err, results) => {
      if (err) res.send(err);
      res.send(results);
    }
  )
    .limit(parseInt(limit, 10))
    .skip(parseInt(pageNo, 10));
};
