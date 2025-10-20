// src/models/Supplier.js
const db = require('../../database/database');

class Supplier {
    static create(supplier, callback) {
        const { name, cnpj, address, contact } = supplier;
        db.run('INSERT INTO suppliers (name, cnpj, address, contact) VALUES (?, ?, ?, ?)',
            [name, cnpj, address, contact],
            function(err) {
                callback(err, { id: this.lastID, ...supplier });
            }
        );
    }

    static findAll(callback) {
        db.all('SELECT * FROM suppliers', [], callback);
    }

    static findById(id, callback) {
        db.get('SELECT * FROM suppliers WHERE id = ?', [id], callback);
    }

    static update(id, supplier, callback) {
        const { name, cnpj, address, contact } = supplier;
        db.run('UPDATE suppliers SET name = ?, cnpj = ?, address = ?, contact = ? WHERE id = ?',
            [name, cnpj, address, contact, id],
            function(err) {
                callback(err, { id, ...supplier });
            }
        );
    }

    static delete(id, callback) {
        db.run('DELETE FROM suppliers WHERE id = ?', [id], callback);
    }
}

module.exports = Supplier;