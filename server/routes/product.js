const express = require('express');
const productController = require('../controller/product');
const {check} = require('express-validator/check');
const router = express.Router();
router.get('/products', productController.getProducts);
router.post('/add-product', [check('name', "invalid Product name").trim().not().isEmpty().isLength({min:5}),
                            check('discription', "minimum 25 words in description").trim().not().isEmpty().isLength({min:10}),
                            check('price', "Price must be decimal value").trim().not().isEmpty().isDecimal(),
                            check('modelId', 'invalid modelId').trim().not().isEmpty()
                            ], productController.postProduct)
module.exports = router;
