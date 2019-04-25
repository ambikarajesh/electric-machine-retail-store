const User = require('../models/user');
const {validationResult} = require('express-validator/check');
exports.postRegister = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error(errors.array()[0].msg);
        error.status = '01',
        error.statusCode = 422;
        error.errors = errors.array();
        throw error;
    }
    const user = new User(req.body);
    user.save().then(result=>{
        res.status(201).json({
            status:"00",
            message: "user registered successfully",
            product:result
        })
    }).catch(err=>{
        if(!err.statusCode){
            err.status = '01';
            err.statusCode = 500;            
        }    
        next(err);
    })
}