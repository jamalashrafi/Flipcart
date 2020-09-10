const OrderModel = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  // router.post("/", isAuth, async (req, res) => {
  const newOrder = new OrderModel({
    orderItems: req.body.orderItems,
    // eslint-disable-next-line no-underscore-dangle
    user: req.user._id,
    shipping: req.body.shipping,
    payment: req.body.payment,
    itemsPrice: req.body.itemsPrice,
    taxPrice: req.body.taxPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
  });
  const newOrderCreated = await newOrder.save();
  res.status(201).send({ message: 'New Order Created', data: newOrderCreated });
};
