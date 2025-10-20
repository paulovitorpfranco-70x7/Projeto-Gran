// src/models/Product.js
const db = require('../../database/database');

class Product {
    static create(product, callback) {
        const { name, description, price, barcode } = product;
        db.run('INSERT INTO products (name, description, price, barcode) VALUES (?, ?, ?, ?)',
            [name, description, price, barcode],
            function(err) {
                callback(err, { id: this.lastID, ...product });
            }
        );
    }

    static findAll(callback) {
        db.all('SELECT * FROM products', [], callback);
    }

    static findById(id, callback) {
        db.get('SELECT * FROM products WHERE id = ?', [id], callback);
    }

    static update(id, product, callback) {
        const { name, description, price, barcode } = product;
        db.run('UPDATE products SET name = ?, description = ?, price = ?, barcode = ? WHERE id = ?',
            [name, description, price, barcode, id],
            function(err) {
                callback(err, { id, ...product });
            }
        );
    }

    static delete(id, callback) {
        db.run('DELETE FROM products WHERE id = ?', [id], callback);
    }
}

module.exports = Product;