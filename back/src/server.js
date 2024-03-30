const express = require("express");
const router = require("./routes/movies.js");
const morgan = require("morgan");
const cors = require("cors");

const moviesController = require('./controllers/moviesController.js');

const app = express();


// aca utilizar el middleware 
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use((req, res, next) =>{
    console.log("estamos pasando por mi propio middleware");
    next();
});

// Montar el enrutador en la ruta específica
// app.use('/api', router);
app.use(router);

module.exports = app;


