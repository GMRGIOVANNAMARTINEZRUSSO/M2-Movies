const  moviecollection = require ("../models/Movie");
const conDb = require ("../config/conDb");
const mongoose = require("mongoose");

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
 
