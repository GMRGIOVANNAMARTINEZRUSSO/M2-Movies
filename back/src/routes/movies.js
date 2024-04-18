const express = require("express");
const moviesController = require("../controllers/moviesController");
const app = require("../server");
const router = express.Router();
const movieService = require("../services/movieService");
const validarDatos = require("../middleware/validarDatos");


router.get('/movies', moviesController.getAllMovies);
router.post('/movies', validarDatos,moviesController.createMovie);


module.exports = router;