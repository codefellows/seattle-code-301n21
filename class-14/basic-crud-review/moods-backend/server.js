const express = require('express');
const app = express();
// allow access to req.body
app.use(express.json());
// cors
const cors = require('cors');
app.use(cors());

// connect to db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoApp', {useNewUrlParser: true, useUnifiedTopology: true});

const Mood = require('./models/mood');

app.get('/', (req, res) => {
  res.send('mood app');
});

app.get('/moods', (req, res) => {
  Mood.find({}, (err, databaseResponse) => {
    res.send(databaseResponse);
  });
});

app.post('/moods', (req, res) => {
  // create the new mood
  let newMood = new Mood({
    emotion: req.body.emotion,
    intensity: req.body.intensity
  });
  // save it
  newMood.save().then(moodData => {
    res.send(moodData);
  });
});

app.delete('/moods/:id', (req, res) => {
  // req.params since we're using a :routeparam
  let idToDelete = req.params.id;
  Mood.deleteOne({_id: idToDelete}, (err, results) => {
    res.send('did it');
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
