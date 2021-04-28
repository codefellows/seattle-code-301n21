'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = 3001;

const mongoose = require('mongoose');
// making a database called cats
mongoose.connect('mongodb://localhost:27017/cats', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

const CatParent = require('./models/Users');

const bob = new CatParent({ name: 'bobmister', cats: [{name:'fluffy'}, {name:'joe'}]});
console.log({bob})
bob.save();

const sue = new CatParent({ name: 'sue', cats: [{name:'goose'}, {name:'malaki'}, {name:'sam'}]});
sue.save();

app.get('/cats', getAllCats)

function getAllCats(request, response) {
  const name = request.query.name;
  console.log({name});
  CatParent.find({name}, (err, person) => {
    if(err) return console.error(err);
    console.log({person})
    response.send(person[0].cats);
  })
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));

// terminal commands:
// mongo - enters mongo
// show dbs - shows all collections
// use <db> - switches to the collection you want to be in