//modulos internos
const mongoose = require("mongoose");

//Esquema
const esquemaPublicacion = new mongoose.Schema({
        nombre:{
            type: String,
        },
        titulo:{
            type: String,
        },
        descripcion:{
            type: String,
        },
        imagen:{
            type: String,
        },
        fechaRegistro:{
            type: Date,
            default: Date.now,
        }
});

//Creacion de exports
const Publicacion = mongoose.model("publicacion", esquemaPublicacion);
module.exports.Publicacion = Publicacion;
module.exports.esquemaPublicacion = esquemaPublicacion;