const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    try{
        const token = req.header("x-token");
        if(!token){
            res.status(404).send("token error")
        }

        const decoded = jwt.verify(token,'thisisasecret');

        req.user = decoded.user;

        next();
    }catch(error){
        console.log("Error Occurred");
    }
}