const  moviecollection = require ("../models/Movie");
const conDb = require ("../config/conDb");
const mongoose = require("mongoose");
// const { createMovie } = require("../controllers/moviesController");
module.exports = {
    getAllMovies: async()=>{
        try {
            conDb();
            const movies = await moviecollection.find();
            return movies;
        } catch (error) {
            throw new Error(`Error al obtener las películas: ${error.message}`);
        }
    },
    createMovie: async (title, director, year, duration, genre, rate, poster) => {
        console.log(title,director,year)
        try {
                if (!title || !director || !year) {
                    throw new Error("Los campos 'title', 'director' y 'year' son obligatorios.");
             }
            const newMovie = new moviecollection({
                title,
                director,
                year,
                duration,
                genre,
                rate,
                poster
            });
    
            const savedMovie = await newMovie.save();
    
            return savedMovie;
        } catch (error) {
            if (error.name === 'ValidationError') {
                throw new Error('Los datos proporcionados son inválidos');
            } else {
                throw new Error(`Error al agregar la película: ${error.message}`);
            }
        }
    }
    
    }
 

// class MovieModel{
//     constructor(Id,title, director, year, duration, genre, rate,poster) {
//         this.id = Id;
//         this.title = title;
//         this.director = director;
//         this.year = year;
//         this.duration = duration;
//         this.genre = genre;
//         this.rate = rate;
//         this.poster =poster;
//     }
// }

// // Definimos la clase Movie para mantener la integridad de los datos
// class Movie {
//     constructor() {
//         this.movies = [];
//         this.Id = 0;
//     }
//      getAllMovies() {
//         return this.movies;
//     }
    
//     addMovies(title, director, year, duration, genre, rate,poster){
//         console.log(title)
//         if (!title || !director || !year) {
//             throw new Error("Los campos 'title', 'director' y 'year'son obligatorios.");
//         }
//         // let Id = this.movies.length
//         // // const id = this.Id++
//         const id = this.movies.length;
        
//         const newMoviesModel = new MovieModel(id,title, director, year, duration, genre, rate,poster);
//         this.movies.push(newMoviesModel);
//         return newMoviesModel;
//     }
// }

// const newMovie = new Movie();
// newMovie.addMovies(
//          "Guardians of the Galaxy Vol. 2",
//          "James Gunn",
//          2017,
//          "2h 16min",
//          ["Action", "Adventure", "Comedy"],
//          7.7,
        
//           "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
// );
// newMovie.addMovies(
//     "Star Wars: Episode IV - A New Hope", 
//         "George Lucas", 
//         1977, 
//         "2h 1min", 
//         ["Action", "Adventure", "Fantasy", "Sci-Fi"], 
//         8.7, 
//         "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    
// );
// newMovie.addMovies(
//     "The Lord of the Rings: The Fellowship of the Ring", 
//         "Peter Jackson", 
//         2001, 
//         "2h 58min", 
//         ["Action", "Adventure", "Drama", "Fantasy"], 
//         8.8, 
//         "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    
// )
// // const pelicula1 = newMovie.addMovies("pelicula1","director1",2004,"parametro3","parametro4","parametro5","parametro6");
// // console.log (pelicula1)
// // Exportamos un objeto con una propiedad que es una función asíncrona para obtener todas las películas
// module.exports = newMovie;