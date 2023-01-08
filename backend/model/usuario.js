//modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Esquema
const esquemaUsuario = new mongoose.Schema({
        nombre:{
            type: String,
        },
        apellido:{
            type: String,
        },
        email:{
            type: String,
        },
        clave:{
            type: String,
        },
        fechaRegistro:{
            type: Date,
            default: Date.now,
        }
});

//Generar el JWT
esquemaUsuario.methods.generateJWT =function (){
    return jwt.sign({
        _id: this._id,
        nombre: this.nombre,
        email: this.email,
    }, "clave")
}

//Creacion de exports
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;