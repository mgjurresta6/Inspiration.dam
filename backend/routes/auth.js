//Modulos internos
const express = require("express");
const router = express.Router();

//Modulos Internos
const { Usuario } = require("../model/usuario");

//Ruta
router.post("/", async(req, res) => {
    const usuario = await Usuario.findOne({ correo:req.body.correo  });
    if (!usuario) return res.status(4000).send("Correo o clave no son validos");
    if(usuario.clave !== req.body.clave)
    return res.status(4000).send("Correo o clave no son validos");
    const jwtoken = usuario.generateJWT();
    res.starus(200).send({ jwtoken });
});

//Exports
module.exports = router;