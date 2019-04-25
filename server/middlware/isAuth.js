const User = require('../models/user');
module.exports = (req, res, next) =>{
    const token = req.cookies.auth;
    //console.log(token)
    User.verifyToken(token, (err,user)=>{
        console.log(user)
        if(!user){
            const error = new Error('Unauthorized User');
            error.status = '01',
            error.statusCode = 401;
            return next(error)
        }
        req.token = token;
        req.user = user
        next();
    })    
}