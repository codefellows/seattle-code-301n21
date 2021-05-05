const express = require('express');
const app = express();
// make sure our app can handle post requests
// specifically, make sure that on post requests, we can access the data in the request body
app.use(express.json());

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gifts', {useNewUrlParser: true, useUnifiedTopology: true});

const Users = require('./models/Users');

// let myUser = new Users({
//   email: 'michelle@codefellows.com'
// });
// myUser.save().then(() => console.log('user saved'));
app.get('/', (req, res) => {
  Users.find((err, userData) => {
    res.send(userData);
  });
});
// colon at the start of :email makes it a parameter
app.get('/users/:potato', (req, res) => {
  Users.find({email: req.params.potato}, (err, userData) => {
    res.send(userData);
  });
});

app.post('/gifts', (req, res) => {
  // for post requests, data is inside of the body
  // as long as we have the app.use(express.json()) line at the top of the file
  console.log(req.body);
  // find the relevant user in the database
  Users.find({email: req.body.email}, (err, userData) => {
    if(userData.length < 1) {
      res.status(400).send('user does not exist');
    } else {
      // add the new gift info to that user
      let user = userData[0];
      user.gifts.push({
        name: req.body.name,
        description: req.body.description
      });
      // save the user
      user.save().then( (userData) => {
        console.log(userData);
        res.send(userData.gifts);
      });
    }
  });
});

app.delete('/gifts/:id', (req, res) => {
  let email = req.query.user;
  // find the user
  Users.find({email: email}, (err, userData) => {
    let user = userData[0];
    // delete the gift
    user.gifts = user.gifts.filter(gift => `${gift._id}` !== req.params.id);
    // save the user
    console.log(user.gifts);
    user.save().then(userData => {
      res.send(userData.gifts);
    });
  });
});

app.listen(3001, () => console.log('listening on 3001'));
