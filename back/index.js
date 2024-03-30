const express = require("express");
const app = require("./src/server");
const router= require("./src/routes/movies")

const PORT = 3000;

app.use(router);


app.listen(PORT, () => {
    console.log (`Servidor iniciado en el puerto ${PORT}`);
});


// app.listen(3001, () => {
//     console.log (`servidor escuchando en el puerto ${3001}`);
// });


// // Inicia el servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor iniciado en el puerto ${PORT}`);
// });