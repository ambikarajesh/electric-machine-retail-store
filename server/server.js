const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {useNewUrlParser:true});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/user', userRoute);
app.use('/product', productRoute)
app.use((error, req, res, next)=>{
    res.status(error.statusCode).json({
        status:error.status,
        message:error.message,
    })
})
app.listen(PORT, ()=>{
    console.log(`Server Start at ${PORT}`);
})