'use strict';

const User = require('../models/Users');
// User.collection.drop();  

const Gift = {};

Gift.getAllGifts = async function(request, response) {
  const email = request.query.email;
  await User.find({ email }, (err, person) => {
    if(err) console.error(err);
    if(!person.length){
      person[0] = { email, gifts: [] }
      const newUser = new User(person[0])
      newUser.save();
    }
    response.send(person[0].gifts);
  });
}

Gift.addAGift = async function(request, response) {
  const {newGift, email} = request.body;
  await User.find({ email }, (err, person) => {
    if(err) console.error(err);
    person[0].gifts.push(newGift);
    person[0].save();
    response.send(person[0].gifts);
  })
}

Gift.deleteAGift = async function(request, response) {
  const index = Number(request.params.index);
  const email = request.query.email;
  await User.find({ email }, (err, person) => {
    if(err) console.error(err);
    const newGiftArray = person[0].gifts.filter((gift, i) => i !== index);
    person[0].gifts = newGiftArray;
    person[0].save();
    response.send('success!');
  })
}

module.exports = Gift;