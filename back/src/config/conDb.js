require("dotenv").config();
const mongoose = require("mongoose");
//en este modulo vamos a hacer la conecxion a la basedd con una funcion
//exportar la funcion
// const conDb = async()=>{
// //aca hacemos la conexion con la base de datos con la url q nos da mongo
// //url
// console.log(process.env.MONGO_URI);
// };

const conDb = async () => {
    try {
        await mongoose.connect (process.env.MONGO_URI)
        console.log("Conexión a MongoDB Atlas establecida");
    } catch (error) {
        console.error("Error al conectar a MongoDB Atlas:", error.message);
    }
};

module.exports = conDb;