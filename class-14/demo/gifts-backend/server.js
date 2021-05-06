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
    if(userData.length < 1) {
      // create the user!
      let newUser = new Users({email: req.params.potato});
      newUser.save().then(newUserData => {
        res.send([newUserData]);
      });
    } else {
      res.send(userData);
    }
  });
});

app.post('/gifts', (req, res) => {
  // for post requests, data is inside of the body
  // as long as we have the app.use(express.json()) line at the top of the file
  console.log(req.body);
  // find the relevant user in the database
  Users.find({email: req.body.email}, (err, userData) => {
    if(userData.length < 1) {
      // res.status(400).send('user does not exist');
      // let's create the user with that email address and save them!
      let newUser = new Users({
        email: req.body.email,
        gifts: [
          {name: req.body.name,description: req.body.description}
        ]
      });
      newUser.save().then(newUserData => {
        res.send(newUserData.gifts);
      });
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

// best practice: use body for non-GET requests
//     use query for GET requests

//              this :id thing is req.params
app.put('/gifts/:id', (req, res) => {
  // find the user
  let email = req.body.user;
  Users.find({email: email}, (err, userData) => {
    // update the gift
    let giftId = req.params.id;
    let user = userData[0];
    user.gifts.forEach(gift => {
      if(`${gift._id}` === giftId) {
        // we found the correct gift! update it
        gift.name = req.body.name;
        gift.description = req.body.description;
      }
    });
    // save the updated user/gift
    user.save().then(savedUserData => {
      // send back the new data
      res.send(savedUserData.gifts);
    });
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
