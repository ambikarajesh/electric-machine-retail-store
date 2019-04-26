const Product = require('../models/product');
const {validationResult} = require('express-validator/check')
exports.getProducts = (req, res, next) => {
  Product.find().then(products=>{
    res.status(200).json({
        status:'00',
        message:'Fetch Products successfully',
        products:products
    });
  }).catch(err=>{
    if(!err.statusCode){
        err.status = '01';
        err.message = 'Internal Server Error';
        err.statusCode = 500;            
    }    
    next(err);
  })
}
exports.postProduct = (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error(errors.array()[0].msg);
        error.status = '01';
        error.statusCode = 422;
        error.errors = errors.array();
        throw error;
    }
    const product = new Product(req.body);
    product.save().then(result=>{        
        res.status(201).json({
            status:'00',
            message:'Create product succesfully',
            product:result
        })
    })

}