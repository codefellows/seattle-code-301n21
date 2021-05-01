'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json()); 

const Gift = require('./modules/Gift');

const PORT = 3001;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gifts', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

app.get('/gift', Gift.getAllGifts);
app.post('/gift', Gift.addAGift);
app.delete('/gift/:index', Gift.deleteAGift);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
