const express = require('express');
const productController = require('../controller/product');
const router = express.Router();
router.get('/add-products', productController.getProducts);
module.exports = router;