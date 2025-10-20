// src/models/ProductSupplier.js
const db = require('../../database/database');

class ProductSupplier {
    static associate(productId, supplierId, callback) {
        db.run('INSERT INTO product_suppliers (product_id, supplier_id) VALUES (?, ?)',
            [productId, supplierId],
            callback
        );
    }

    static disassociate(productId, supplierId, callback) {
        db.run('DELETE FROM product_suppliers WHERE product_id = ? AND supplier_id = ?',
            [productId, supplierId],
            callback
        );
    }

    static findProductsBySupplier(supplierId, callback) {
        db.all(`
            SELECT p.* FROM products p
            JOIN product_suppliers ps ON p.id = ps.product_id
            WHERE ps.supplier_id = ?
        `, [supplierId], callback);
    }

    static findSuppliersByProduct(productId, callback) {
        db.all(`
            SELECT s.* FROM suppliers s
            JOIN product_suppliers ps ON s.id = ps.supplier_id
            WHERE ps.product_id = ?
        `, [productId], callback);
    }
}

module.exports = ProductSupplier;