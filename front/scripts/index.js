const createMovie = require("./createMovie");
const renderCards = require("./renderCards");

const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('http://localhost:3000/movies');
        // Retorna los datos recibidos del servidor
        console.log(response.data);
        renderCards(response.data)
    } catch (error) {
        console.error('Error al realizar la petición:', error);
        throw error;
    }
}

const container = document.getElementById('container');
if (container)fetchData() 

document.getElementById("movieForm")?.addEventListener("submit",createMovie);

