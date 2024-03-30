// const express = require ( "express");
// const app = express();
// app.use (express.json());
// app.get("/", (req, res)=>{
//     res.json({
//         title:"pelicula1"
//     })
// });
// app.post("/", (req, res)=>{
//     const {title}=req.body
//     console.log(title)
//     res.end()
//     });

// app.listen(3001);

// let PORT = 3000;
// const server = app.listen(PORT, () => {
//   console.log(`Server is listening on http://localhost:${PORT}`);
// });

// server.on("error", (err) => {
//   if (err.code === "EADDRINUSE") {
//     console.log(`Port ${PORT} is in use, trying the next one...`);
//     PORT++;
//     server.listen(PORT);
//   }
// });

// node --watch temporal.js