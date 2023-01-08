const express = require("express");
const router = express.Router();

const Publicacion = require("../model/publicacion");
const Usuario = require("../model/usuario");
const auth = require("../middleware/auth");

//REgistro de publicacion
router.post("/", auth, async(req, res) => {
    //Se obtiene el id del usuario logueado
    const usuario = await Usuario.findById(req.usuario._id);

    //si el usuiario no existe
    if (!usuario) return res.status(401).send("El usuario no existe");

    //Si existe el usuario se crea una publicacion
    const publicacion = new Publicacion ({
        idUsuario: usuario._id,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
    }) 
    //enviar resultado
    const resultado = await publicacion.save();
    res.status(200).send(resultado);
})
//Exports
module.exports = router;