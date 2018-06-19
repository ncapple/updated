const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

console.log('loading mongoose');

const modelsPath = path.join(__dirname, '../models');
const reg = new RegExp('\\.js$', 'i');

mongoose.connect('mongodb://localhost/MeanBeltTest');
mongoose.connection.on('connected', () => 'connected to mongodb');


mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});