// src/controllers/ProductSupplierController.js
const ProductSupplier = require('../models/ProductSupplier');

class ProductSupplierController {
    static associate(req, res) {
        const { productId, supplierId } = req.body;
        ProductSupplier.associate(productId, supplierId, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Associação criada com sucesso.' });
        });
    }

    static disassociate(req, res) {
        const { productId, supplierId } = req.body;
        ProductSupplier.disassociate(productId, supplierId, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ message: 'Associação removida com sucesso.' });
        });
    }

    static getProductsBySupplier(req, res) {
        ProductSupplier.findProductsBySupplier(req.params.supplierId, (err, products) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(products);
        });
    }

    static getSuppliersByProduct(req, res) {
        ProductSupplier.findSuppliersByProduct(req.params.productId, (err, suppliers) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(suppliers);
        });
    }
}

module.exports = ProductSupplierController;