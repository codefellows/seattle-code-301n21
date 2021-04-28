const mongoose = require('mongoose');
const { Schema } = mongoose;

const activitySchema = new Schema({
  activityName: String
});
const catSchema = new Schema({
  name: String,
  color: String,
  hasClaws: Boolean,
  // favoriteActivities data type is an array of activitySchema
  favoriteActivities: [activitySchema]
});

// make a model out of the schema
const Cat = mongoose.model('Cat', catSchema);

// export the model
module.exports = Cat;
