const jwt = require("jsonwebtoken");

//funcion middleware
function auth(req, res, next){
    let jwtToken = req.header("Authorization");
    jwtToken  = jwtToken.split(" ")[1];
    if (!jwtToken ) 
    return res.status(401).send("No hay token para validar");
    try {
        const payload = jwt.verify(jwtToken, "pass");
        req.usuario = payload;
        next ();
    }catch (error){
        res.status(401).send("Token no valido");
    }
}

//Exports
module.exports = auth;