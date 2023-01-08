//Modulos internos
const express = require("express");
const router = express.Router();

//Modulos Internos
const Usuario = require("../model/usuario");

//Ruta
router.post("/", async(req, res) => {
    const usuario = await Usuario.findOne({ correo: req.body.correo  });
    if (!usuario) 
    return res.status(400).send("Correo o clave no son validos");

    if(usuario.clave !== req.body.clave)
    return res.status(400).send("Correo o clave no son validos");

    const jwToken = usuario.generateJWT();
    res.status(200).send({ jwToken });
});

//Exports
module.exports = router;