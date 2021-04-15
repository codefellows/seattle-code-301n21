const superagent = require('superagent');
require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

console.log('it\'s working!');

// proof of life: just do the most simple request possible
app.get('/weather', (request, response) => {
  superagent.get('https://api.weatherbit.io/v2.0/forecast/daily')
    // .query lets us break up the query parameters using an object instead of a string
    .query({
      key: process.env.WEATHERBIT_API_KEY,
      units: 'I',
      lat: request.query.lat,
      lon: request.query.long
    })
    .then(weatherData => {
      response.json(weatherData.body.data.map(x => (
        {date: x.valid_date,
          description: x.weather.description})));
    });
});


app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
