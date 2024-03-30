const showMessageFunction = require ("../services/showMessage");
const newMovieService = require("../services/movieService");


const showMessage =  (req, res) => {
// res.send(showMessageFunction());
};
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
const getAllMovies = async (req, res) => {
    // res.json(movieService.getAllMovies())
    console.log(newMovieService.getAllMovies());
    // const moviesController = async (req, res) => {
    try {
        // Llamamos a la función asíncrona del servicio para obtener todas las películas
        const allMovies = await newMovieService.getAllMovies();
        console.log(allMovies);
        
        // Enviamos la respuesta al cliente con las películas obtenidas
        res.json(allMovies);
    } catch (error) {
        // En caso de error, enviamos un mensaje de error al cliente
        res.status(500).json({ error: 'Error al obtener las películas' });
    }
};
const createMovies = (req, res) =>{
try {
    const {title, director, year, duration, genre, rate ,poster} = req.body
    const movie = newMovieService.addMovies(title, director, year, duration, genre, rate ,poster);
    console.log (movie);
    res.send("enviado correctamente");
} catch (error) {
    res.json({error: error.message})
}

}

// Exportamos la función del controlador
module.exports = {
    moviesController:showMessage,
    getAllMovies,
    createMovies,
};



