const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Definir el esquema de la película
const movieSchema = new Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster: String,
});

// Crear el modelo Movie basado en el esquema
const moviecollection = mongoose.model("moviescollections", movieSchema);

module.exports = moviecollection;
