const mongoose = require('mongoose');
const {Schema} = mongoose;
// create the mood schema

const moodSchema = new Schema({
  emotion: String,
  date: {type: Date, default: Date.now},
  intensity: Number
});
// create the model from the schema

const Mood = mongoose.model('Mood', moodSchema);
// export it

module.exports = Mood;
