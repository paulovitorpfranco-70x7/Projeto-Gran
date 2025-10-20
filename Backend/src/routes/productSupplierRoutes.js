// src/routes/productSupplierRoutes.js
const express = require('express');
const ProductSupplierController = require('../controllers/ProductSupplierController');
const router = express.Router();

router.post('/associate', ProductSupplierController.associate);
router.post('/disassociate', ProductSupplierController.disassociate);
router.get('/products-by-supplier/:supplierId', ProductSupplierController.getProductsBySupplier);
router.get('/suppliers-by-product/:productId', ProductSupplierController.getSuppliersByProduct);

module.exports = router;