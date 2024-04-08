const express = require ("express");
const moviesController = require ("../controllers/moviesController");
const app = require("../server");
const router = express.Router();
const movieService = require ("../services/movieService")

router.get('/movies', moviesController.getAllMovies); 
router.post('/movies', moviesController.createMovie); 
// router.post('/movies', moviesController.addMovie);
// // Ruta para obtener todas las películas

// router.get('/movies', async (req, res) => {
//     try {
//         const movies = await movieService.getAllMovies();
//         res.json(movies);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });
// router.post('/movies', async (req, res) => {
//     try {
//         const { title, director, year, duration, genre, rate, poster } = req.body;
//         const newMovie = await movieService.addMovie(title, director, year, duration, genre, rate, poster);
//         res.json(newMovie);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.get('/movies', (req, res) => {
//     // Llamar al controlador correspondiente
//     moviesController(req, res);
//   });

// app.get('/movies', moviesController.getAllMovies);

module.exports = router;