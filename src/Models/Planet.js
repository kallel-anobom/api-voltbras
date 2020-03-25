const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
  name: String,
  mass: Number,
  hasStation: Boolean
});

module.exports = PlanetSchema;