const express = require('express');
const OrderController = require('../controllers/OrderController');

const router = express.Router();

console.log('In order Route');
router.get('/', OrderController.createOrder);

module.exports = router;
