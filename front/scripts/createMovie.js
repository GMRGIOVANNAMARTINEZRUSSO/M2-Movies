const axios = require ("axios");
function createMovie(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const year = parseInt(document.getElementById("year").value);
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value;
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  const movie = { title, year, director, duration, genre, rate, poster };

  if (title === "" || year === "" || director === "" || genre === "" || rate === "") {
    alert("Todos los campos son obligatorios.");
  } else {
    alert("Formulario enviado correctamente.");
    document.getElementById("movieForm").reset();
  }
 console.log (movie);
 const pruebaPelicula =  {
  "title": "La La Land",
  "year": 2016,
  "director": "Damien Chazelle",
  "duration": "2h 8min",
  "genre": 
      "Drama",
    
  "rate": "8",
  "poster": "https://pics.filmaffinity.com/la_la_land-262021831-large.jpg"
}

  const apiUrl = 'http://localhost:3000/movies';

  const config = {
    method: 'post', 
    url: apiUrl, 
    headers: {
      'Content-Type': 'application/json', 
    },
    data: movie,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data); 
    })
    .catch(function (error) {
      console.error(error);
    });
}

module.exports = createMovie;

