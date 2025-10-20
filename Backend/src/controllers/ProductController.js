// src/controllers/ProductController.js
const Product = require('../models/Product');

class ProductController {
    static create(req, res) {
        Product.create(req.body, (err, product) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json(product);
        });
    }

    static getAll(req, res) {
        Product.findAll((err, products) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(products);
        });
    }

    static getById(req, res) {
        Product.findById(req.params.id, (err, product) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!product) {
                return res.status(404).json({ message: 'Produto não encontrado.' });
            }
            res.json(product);
        });
    }

    static update(req, res) {
        Product.update(req.params.id, req.body, (err, product) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(product);
        });
    }

    static delete(req, res) {
        Product.delete(req.params.id, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(204).send(); // No Content
        });
    }
}

module.exports = ProductController;