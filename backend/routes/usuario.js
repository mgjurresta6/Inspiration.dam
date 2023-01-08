//Modulos internos
const express = require("express");
const router = express.Router();

//Modulos creados
const { Usuario } = require("../model/usuario");

//Creacion rutas
router.post("/", async (req, res) => {
    //Verificacion del mismo correo
    let usuario = await Usuario.findOne({ email: req.body.email});

    //Mismo usuario en la BD
    if (usuario) return res.status(400).send("El usuario ya existe");
    
    //Si no existe ese usuario
    usuario = new Usuario ({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        clave: req.body.clave,
    })

    //Guardar el usuario en la BD
    const result = await usuario.save();
    const jwtoken = usuario.generateJWT();
    res.status(200).send(jwtoken)
})

//Exports
module.exports = router;