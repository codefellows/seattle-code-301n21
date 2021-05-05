'use strict';
const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
  name: {type: String},
  description: {type: String}
});

const birthdayPerson = new mongoose.Schema({
  email: {type: String, required: true},
  gifts: [giftSchema]
});

module.exports = mongoose.model('giftRegistry', birthdayPerson);
