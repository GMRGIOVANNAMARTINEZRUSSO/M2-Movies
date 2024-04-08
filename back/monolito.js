// ========== M210_mongose ==========

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url = "mongodb+srv://giovi92:KRqztkauMk9GbWd9@prueba.qaxdctw.mongodb.net/";
const database = "moviesdatabase";
const moviesSchema = new mongoose.Schema({ _id: Number });
const movieCollection = mongoose.model("moviescollections", moviesSchema);

const dbCon = async () => {
  await mongoose.connect(url + database);
  console.log("connect to database successful");
};
dbCon();

const getMovieService = async () => {
  const movieFind = await movieCollection.find();
  console.log(movieFind);
  return movieFind;
};

getMovieService();

app.get("/", async (req, res) => {
  const usersC = await getMovieService();
  res.json(usersC);
});

app.listen(3000, console.log("server start"));
