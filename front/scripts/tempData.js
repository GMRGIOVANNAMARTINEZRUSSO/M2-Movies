const tempData = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    director: "Chris Columbus",
    duration: "2h 41min",
    genre: ["Adventure", "Family", "Fantasy", "Mystery"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/I/51UizOJ+NFL.jpg",
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    duration: "2h 22min",
    genre: ["	Comedia", "Drama",],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/I/71dViWh3lnL._SL1500_.jpg",
  },
  {
    title: "Iron Man",
    year: 2008,
    director: "Jon Favreau",
    duration: "2h 6min",
    genre: ["Acción", "ciencia ficción", "aventuras", "cine de superhéroes"],
    rate: 7.9,
    poster:
      "https://m.media-amazon.com/images/I/71PYIDCnySL._SL1372_.jpg",
  },
];
// Mapea tarjeta para cada película
const movieCards = tempData.map(movie => {
  const card = document.createElement('div');
  card.classList.add('movie-card'); 

const img = document.createElement('img');
 img.src = movie.poster;
 card.appendChild(img);
  
const content = document.createElement('div');
  content.classList.add('movie-card-content');
  content.innerHTML= `
      <a href="${movie.title}"><h2>${movie.title}</h2></a>
      <p><strong>Año:</strong> ${movie.year}</p>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>duration:</strong>${movie.duration}</p>
      <p><strong>Género:</strong> ${movie.genre.join(', ')}</p>
      <p><strong>Rate:</strong> ${movie.rate}</p>
        `;
  card.appendChild(content);
  return card;
});

// Agrega las tarjetas al contenedor
movieCards.forEach(card => {
  container.appendChild(card);
});


