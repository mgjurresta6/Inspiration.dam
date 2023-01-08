//Modulos internos
const express = require("express");
const mongoose = require("mongoose");

//Modulos creados
const usuario = require("./routes/usuario");
const auth = require("./routes/auth");

//App
const app = express();
app.use(express.json());
app.use("/api/usuario/", usuario);
app.use("/api/auth/", auth);

//Puerto de ejecucion
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Ejecutando en Puerto: " + port));

//Conexion on Mongo
mongoose
.connect('mongodb://127.0.0.1/inspiration', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    },mongoose.set('strictQuery', false)
    )
.then(() => console.log("Se realizo la conexion: ok"))
.catch(() => console.log("No se realizo la conexion: Error"));