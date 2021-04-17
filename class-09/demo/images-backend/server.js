'use strict';

//bring in express
const express = require('express');
const app = express();

// get variables from a .env
require('dotenv').config();

// allow others to hit our server
const cors = require('cors');
app.use(cors());

const superagent = require('superagent');

// validate that env is working with or
const PORT = process.env.PORT || 3001;

//proof of life
app.get('/proof-of-life', (request, response) => response.send('PROOF of LIFE'));

//get images from unsplash API
app.get('/images', getImages);

//unsplash callback function - sets us up for AND uese superagent
function getImages(request, response){
  // set up for easy superagent use
  // console.log(request.query.imageSearch);  // in pace of hardcoded bees
  const imageQuery = request.query.imageSearch;
  // as opposed to this https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY&query=bees
  const url = 'https://api.unsplash.com/search/photos';
  const query = {
    client_id: process.env.UNSPLASH_API_KEY,
    query: imageQuery,
  };

  // USE superagent to make the api call. the DATA most care about lives at results.body
  superagent
    .get(url)
    .query(query)
    .then(imageResults => {
      response.status(200).send(imageResults.body.results.map(img => new ImageObject(img)));
    });

}

// things I swant from API
// alt_description
// urls.regular
// user.name

function ImageObject(img){
  this.alt = img.alt_description;
  this.url = img.urls.regular;
  this.photographer = img.user.name;
}

// truns server on
app.listen(PORT, console.log(`Listening on port ${PORT}`));
