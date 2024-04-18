const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: String,
});


const moviecollection = mongoose.model("moviescollections", movieSchema);

module.exports = moviecollection;
