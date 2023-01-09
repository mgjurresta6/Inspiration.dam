//Modulos de Node
const multer = require("multer");

const directorio = "./public/";

const storge = multer.diskStorage({
    destination: (req, ile, cb) => {
        cb(null, directorio);
    },
    filename: (req, file, cb) => {
        const filename =
        Date.now() +  "-" + file.originalname.toLowerCase().split(" ").join("-"); 
        cb(null,filename);
    },   
});
 
//Cargar archivo
const cargarArchivo = multer ({
    storage: storge,
    fileFilter: (req, file, cb) => {
        //extenxiones aceptadas
        if (file.mimetype == "imagen/png" ||
        file.mimetype == "imagen/jpg" ||
        file.mimetype == "imagen/jpeg" ||
        file.mimetype == "imagen/gif"
        ){
            cb (null, true);
        }else {
            cb(null, false);
            return cd( 
                new Error ("Solo aceptamos este tipo de archivo PNG-JPG-JPEG-GIF") 
            );
        }
    },
});

//Exports
module.exports = cargarArchivo;