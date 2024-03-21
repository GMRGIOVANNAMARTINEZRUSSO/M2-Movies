const renderCards = require("./renderCards")
//import renderCards from "./renderCards";

// const axios = require ("axios");

// const url1 = "https://students-api.2.us-1.fl0.io/movies"
// const url2 = "https://api.1rodemayo.com/movies"
// $.get(url2, (data, status) => {
//   renderCards(data);
// });

// const fetchData = async () => {
//   try {
// const respuesta = await axios("https://api.1rodemayo.com/movies"); //promesa
// renderCards (respuesta.data);
//   }catch (error){
//     console.log ("error al obtener la url");
//   }
// };
// renderCards = (data) => {

// };
// fetchData ();



// fetch('https://jsonplaceholder.typicode.com/users')

//   .then(response => response.json())

//   .then(data => console.log(data))

//   .catch(error => console.log(error))
//   .finally (() => console.log ("message"))

// scripts/index.js

const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://api.1rodemayo.com/movies');
        // return response.data; // Retorna los datos recibidos del servidor
        console.log(response.data);
        renderCards(response.data)
    } catch (error) {
        console.error('Error al realizar la petición:', error);
        throw error;
    }
}
fetchData() 
// Exporta la función fetchData para que pueda ser utilizada en otros archivos
// module.exports = fetchData;
