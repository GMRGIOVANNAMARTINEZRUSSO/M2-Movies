const renderCards = require("./renderCards")
// main.js
//const { fetchData, renderCards } = require('./module.js');

//import renderCards from "./renderCards";
const url1 = "https://students-api.2.us-1.fl0.io/movies"
const url2 = "https://api.1rodemayo.com/movies"
$.get(url2, (data, status) => {
  renderCards(data);
});

