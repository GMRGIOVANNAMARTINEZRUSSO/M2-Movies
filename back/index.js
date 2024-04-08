const express = require("express");
const app = require("./src/server");
const router= require("./src/routes/movies");
const conDb = require("./src/config/conDb");

const PORT = 3000;

app.use(router);

conDb().then((res)=>{
    app.listen(PORT, () => {
        console.log (`Servidor iniciado en el puerto ${PORT}`);
    });
})
.catch (err=>{
    console.log("error al conectar la BDD");
});

// app.listen(3001, () => {
//     console.log (`servidor escuchando en el puerto ${3001}`);
// });


// // Inicia el servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor iniciado en el puerto ${PORT}`);
// });