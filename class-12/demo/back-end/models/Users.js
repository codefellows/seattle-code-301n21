'use strict';
const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: {type: String}
});

const kittySchema = new mongoose.Schema({
  name: {type: String, required: true},
  cats: [catSchema]
});

// console.log({catSchema})
module.exports = mongoose.model('kittyCats', kittySchema);
