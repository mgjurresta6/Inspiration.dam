const express = require("express");
const router = express.Router();

const Publicacion = require("../model/publicacion");
const Usuario = require("../model/usuario");
const auth = require("../middleware/auth");
const cargarArchivo = require("../middleware/file");

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
    });

    //enviar resultado
    const resultado = await publicacion.save();
    res.status(200).send(resultado);

    
    //Publicacion con imagen
    router.post("/cargarArchivo", cargarArchivo.single("imagen"), auth, async(req, res) => {
    
    //Procolo de dominios
    const url = req.protocol +  "://" + req.get("host");
    const usuario = await Usuario.findById(req.usuario._id);
    if (!usuario)
    return res.status(400).send("No existe el usuario en la BD");
    
    let rutaImagen = null;
    if (req.file.filename){
        rutaImagen = url + "/public/" + req.file.filename;
    }else{
        rutaImagen = null;
    }
    //GUardar en la BD    
    const publicacion = new publicacion({
        idUsuario: usuario._id,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        imagen: rutaImagen,
    });
    const resultado = await publicacion.save();
    res.status(200).send(resultado);
    })
})
//Exports
module.exports = router;