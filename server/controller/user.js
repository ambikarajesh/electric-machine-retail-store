const User = require('../models/user');
const {validationResult} = require('express-validator/check');
exports.postRegister = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error(errors.array()[0].msg);
        error.status = '01';
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
            err.message = 'Internal Server Error';
            err.statusCode = 500;            
        }    
        next(err);
    })
}

exports.postLogin = (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error(errors.array()[0].msg);
        error.status = '01',
        error.statusCode = 422;
        error.errors = errors.array();
        throw error;
    }
    User.findOne({email:req.body.email}).then(user=>{
        if(!user){
            const error = new Error('Please, do registeration !!!');
            error.status = '01';
            error.statusCode = 401;
            throw error;
        }
        user.comparePassword(req.body.password, (err, isMatch)=>{
         
            if(!isMatch){
                const error = new Error('Invalid Password !!!');
                error.status = '01';
                error.statusCode = 401;
                return next(error);
            }
            user.generateToken((err, person)=>{
                if(!person){
                    const error = new Error('Invalid Email or Password !!!');
                    error.status = '01';
                    error.statusCode = 401;
                    return next(error);
                }
                res.cookie('auth', user.token).status(200).json({
                    status:'00',
                    message:'Login successfully'
                })
            })
            
        })
        
    }).catch(err=>{
        if(!err.statusCode){
            err.status = '01';
            err.message = 'Internal Server Error';
            err.statusCode = 500;            
        }    
        next(err);
    })
}


exports.getAuth = (req, res, next) =>{
    res.status(200).json({
        status:'00',
        message:"auth response",
        user: req.user
    })
}

exports.getLogout = (req, res, next) =>{
    User.findByIdAndUpdate({_id:req.user._id}, {token:""}).then(user=>{
        res.clearCookie('auth').status(200).json({
            status:'00',
            message:"Logout successfully"
        })
    })
    
}