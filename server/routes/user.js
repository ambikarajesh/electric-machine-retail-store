const express = require('express');
const userController = require('../controller/user');
const {check} = require("express-validator/check");
const router = express.Router();
const User = require('../models/user');
const isAuth = require('../middlware/isAuth');

router.post('/register', [check('email').isEmail().withMessage('Please Enter Valid Email !!!').normalizeEmail().custom((value, {req})=>{
                            return User.findOne({email:value}).then(user => {
                                if(user){
                                        return Promise.reject('Email Already Exist !!!')
                                    }
                                    return true;
                                })
                            }), 
                            check('firstname').trim().not().isEmpty(),
                            check('lastname').trim().not().isEmpty(),
                            check("password").isLength({min:8}).withMessage("Password Should be Combination of One Uppercase , One Lower case, One Special Char, One Digit and atleast 8 Charaters !!!").trim()], userController.postRegister);
router.post('/login', [check('email').isEmail().withMessage('Invalid  Email !!!').normalizeEmail(),
                        check("password").isLength({min:8}).withMessage("Invalid Password !!!").trim()], userController.postLogin)
router.get('/auth',isAuth, userController.getAuth);
router.get('/logout', isAuth, userController.getLogout);
module.exports = router;