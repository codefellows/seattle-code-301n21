'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const superagent = require('superagent');

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.get('/representatives', (request, response) => {
  const address = request.query.address;

  const url = 'https://www.googleapis.com/civicinfo/v2/representatives';
  const query = {
    address,
    key: process.env.GOOGLE_CIVIC_KEY
  }

  superagent
    .get(url)
    .query(query)
    .then(results => {
      const officials = results.body.officials;
      response.status(200).send(officials)
    })
    .catch(error => {
      console.error('error from superagent', error);
      response.status(500).send('server error');
    });
});

app.get('*', notFound);

function notFound(request, response) {
  response.status(404).send('the page you are looking for is not there');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
