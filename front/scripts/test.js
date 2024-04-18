const container = document.getElementById('container');


const renderCards = (data) => {
  const movieCards = data.map(movie => {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    const img = document.createElement('img');
    img.src = movie.poster;
    card.appendChild(img);

    const content = document.createElement('div');
    content.classList.add('movie-card-content');
    content.innerHTML = `
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
};


//import renderCards from "./renderCards";
const url1 = "https://students-api.2.us-1.fl0.io/movies"
const url2 = "https://api.1rodemayo.com/movies"
$.get(url2, (data, status) => {
  renderCards(data);
});


