const movieService = require("../services/movieService");
// const showMessageFunction = require ("../services/showMessage");
// const showMessage =  (req, res) => {

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//         res.status(500).json({ error: 'Error al obtener las películas' });

const createMovie = async (req, res) =>{
try {
    const {title, director, year, duration, genre, rate ,poster} = req.body;
    const newMovie = await movieService.createMovie(title, director, year, duration, genre, rate ,poster);
    console.log (newMovie);
    // res.send("enviado correctamente");
    res.status(201).json(newMovie);
} catch (error) {
    res.status(500).json({ message: error.message });
}
}

module.exports = {
    // moviesController:showMessage,
    getAllMovies,
    createMovie,
};


// res.send(showMessageFunction());
// Controlador para mostrar un mensaje
// const showMessage = (req, res) => {
//     const message = "Próximamente estarán disponibles los datos de películas.";
//     res.send(message);
// };

// // Controlador para la ruta /movies
// function moviesController(req, res) {
//     // Envía una respuesta al cliente con el mensaje
//     res.send('Próximamente estarán disponibles los datos de películas.');
//   }

// movieController.js

// Controlador de películas