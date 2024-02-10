const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    try{
        const token = req.header("x-token");
        if(!token){
            res.status(404).send("token error")
        }

        const decoded = jwt.verify(token,'secretkey');

        req.user = decoded.user;

        next();
    }catch(error){
        console.log("Error Occurred");
        return res.status(500).send('Invalid token'+error); // This means there's some error in the try block
    }
}