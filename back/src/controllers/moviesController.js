const movieService = require("../services/movieService");

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMovie = async (req, res) => {
    try {
        const { title, director, year, duration, genre, rate, poster } = req.body;
        const newMovie = await movieService.createMovie(title, director, year, duration, genre, rate, poster);
        console.log(newMovie);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllMovies,
    createMovie,
};

