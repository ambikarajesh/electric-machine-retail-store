const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const Shema = mongoose.Schema;

const userSchema = new Shema({
    firstname:{
        type:String,
        required:true,       
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:1
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    }
},{timestamps:true});

userSchema.pre('save', function(next){
 var user = this;
 if(user.isModified('password')){
    bcrypt.hash(user.password, 10, (err, hashPwd)=>{
        if(err){
            return next(err);
        }
        user.password = hashPwd;
        next();
    })
 }else{
     next();
 }
     
})

userSchema.methods.comparePassword = function(userPassword, callback){ 
    const user = this;
    bcrypt.compare(userPassword, user.password, (err, isMatch)=>{  
        if(err){
            return callback(err)
        }      
        callback(null, isMatch);
    })
}
userSchema.methods.generateToken = function(callback){
    const user = this;
    const token = jwt.sign({password:user.password, userId:user._id}, process.env.JWTKEY);
    user.token = token;
    user.save((err, person)=>{
        if(err){
            return callback(err)
        }
        callback(null, person)
    });
}
userSchema.statics.verifyToken = function(token, callback){   
    const user = this; 
    jwt.verify(token, process.env.JWTKEY, (err, decodeUser)=>{
        if(err){
            return callback(err)
        }
        user.findById({_id:decodeUser.userId, token:token}).then(person=>{
            callback(null, person)
        }).catch(err=>{ return callback(err)})
    })
}
module.exports = mongoose.model("User", userSchema);