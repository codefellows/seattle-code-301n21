'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const superagent = require('superagent');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
// Round 1
// set up my cache: it starts empty
// values for the keys in the CACHE are an array:
//   arr[0] is the timestamp
//   arr[1] is the actual data
const CACHE = {};

app.get('/recipes', getRecipes);

function getRecipes(request, response) {
  const ingredient = request.query.ingredient;
  // make sure previous request was made in the last week
  // (1000* 60 * 60 * 24 * 7) is # of milliseconds in one week
  // Round 1: just the CACHE[ingredient]
  // Round 2: the date checking
  if(CACHE[ingredient] && (Date.now() - CACHE[ingredient][0]) < (1000 * 60 * 60 * 24 * 7)) {
    console.log('Cache hit, not making request to Edamam');
    // don't make the request to Edamam, just send the response
    let previousResponseData = CACHE[ingredient][1];
    response.status(200).send(previousResponseData);
  } else {
    // I haven't seen it before, make the request to Edamam using Superagent
    console.log('Cache miss, making request to Edamam');
    const url = `https://api.edamam.com/search`;
    const query = {
      q:ingredient,
      app_id:process.env.FOOD_APP_ID,
      app_key:process.env.FOOD_APP_KEY
    };

    superagent
      .get(url)
      .query(query)
      .then(res => {
        const recipeArr = res.body.hits.map(recipe => new Recipe(recipe.recipe));
        // save the array of recipe data to my cache, for future happiness if we make the same request again
        // also save the current time, so I know if the recipe data is stale in the future
        // Round 1: just the recipeArr
        // Round 2: also Date.now()
        CACHE[ingredient] = [Date.now(), recipeArr];
        response.status(200).send(recipeArr);
      })
      .catch(err => {
        console.err('error', err);
        response.status(500).send('error', err);
      });
  }
}

function Recipe(recipe) {
  this.uri = recipe.uri;
  this.name = recipe.label;
  this.image_url = recipe.image;
  this.ingredients = recipe.ingredientLines;
  this.totalTime = recipe.totalTime;
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
