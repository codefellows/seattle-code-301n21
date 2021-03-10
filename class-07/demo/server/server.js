'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

const myTargetList = ['shoes', 'bags', 'games', 'cleaning supples'];

app.get('/', (request, response) => {
  response.send('hello from the home route!');
});

app.get('/bananas', (request, response) => {
  response.json({"bananas":"are cool"})
});

app.get('/shoppingList', (request, response) => {
  response.status(200).send(myTargetList);
});

app.get('*', (request, response) => {
  response.status(404).send('not found');
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
