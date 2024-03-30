const express = require ("express");
const moviesController = require ("../controllers/moviesController");
const app = require("../server");
const router = express.Router();



// Ruta para obtener todas las películas
router.get('/movies', moviesController.getAllMovies); 
router.post('/movies', moviesController.createMovies); 
// app.get('/movies', (req, res) => {
//     // Llamar al controlador correspondiente
//     moviesController(req, res);
//   });

// app.get('/movies', moviesController.getAllMovies);


module.exports = router;