const express = require('express');
const MenController = require('../controllers/MenController');

const router = express.Router();

router.get('/', MenController.listMenGoods);

module.exports = router;
