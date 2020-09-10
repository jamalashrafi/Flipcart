const express = require('express');
// require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index');
const menuRoute = require('./routes/menu');
const menRoute = require('./routes/men');
const productsRoute = require('./routes/products');

const app = express();

const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
app.use('/', indexRoute);
app.use('/menu', menuRoute);
app.use('/men', menRoute);
app.use('/products', productsRoute);

// db setup
mongoose.connect(uri || 'mongodb://localhost/Flipcart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection established successfully');
});

module.exports = app;
