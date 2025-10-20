// src/controllers/SupplierController.js
const Supplier = require('../models/Supplier');

class SupplierController {
    static create(req, res) {
        Supplier.create(req.body, (err, supplier) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json(supplier);
        });
    }

    static getAll(req, res) {
        Supplier.findAll((err, suppliers) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(suppliers);
        });
    }

    static getById(req, res) {
        Supplier.findById(req.params.id, (err, supplier) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!supplier) {
                return res.status(404).json({ message: 'Fornecedor não encontrado.' });
            }
            res.json(supplier);
        });
    }

    static update(req, res) {
        Supplier.update(req.params.id, req.body, (err, supplier) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(supplier);
        });
    }

    static delete(req, res) {
        Supplier.delete(req.params.id, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(204).send(); // No Content
        });
    }
}

module.exports = SupplierController;