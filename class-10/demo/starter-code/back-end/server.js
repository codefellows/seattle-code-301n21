'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const superagent = require('superagent');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/recipes', getRecipes);

function getRecipes(request, response) {
  const ingredient = request.query.ingredient;
  const url = `https://api.edamam.com/search`;
  const query = {
    q:ingredient,
    app_id:process.env.FOOD_APP_ID,
    app_key:process.env.FOOD_APP_KEY
  }

  superagent
    .get(url)
    .query(query)
    .then(res => {
      const recipeArr = res.body.hits.map(recipe => new Recipe(recipe.recipe));
      response.status(200).send(recipeArr);
    })
    .catch(err => {
      console.err('error', err);
      response.status(500).send('error', err);
    })
}

function Recipe(recipe) {
  this.uri = recipe.uri;
  this.name = recipe.label;
  this.image_url = recipe.image;
  this.ingredients = recipe.ingredientLines;
  this.totalTime = recipe.totalTime;
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
