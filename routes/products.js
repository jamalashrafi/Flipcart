const express = require('express');
const ProductsController = require('../controllers/ProductsController');

const router = express.Router();

console.log('In product Route');
router.get('/', ProductsController.listProducts);

module.exports = router;
