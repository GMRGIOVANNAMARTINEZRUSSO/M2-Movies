require("dotenv").config();
const mongoose = require("mongoose");


const conDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Conexión a MongoDB Atlas establecida");
    } catch (error) {
        console.error("Error al conectar a MongoDB Atlas:", error.message);
    }
};

module.exports = conDb;