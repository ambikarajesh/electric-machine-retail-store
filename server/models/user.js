const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
});

userSchema.pre('save', function(next){
 var user = this;
 bcrypt.genSalt(10, (err, salt)=>{
    if(err){
        return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hashPwd)=>{
        if(err){
            return next(err);
        }
        user.password = hashPwd;
        next();
    })
 })
})
module.exports = mongoose.model("User", userSchema);