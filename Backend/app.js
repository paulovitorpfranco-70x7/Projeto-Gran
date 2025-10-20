// app.js
const express = require('express');
const cors = require('cors'); // Para permitir requisições do frontend
const productRoutes = require('./src/routes/productRoutes');
const supplierRoutes = require('./src/routes/supplierRoutes');
const productSupplierRoutes = require('./src/routes/productSupplierRoutes');
require('./database/database'); // Inicializa o banco de dados

const app = express();
const PORT = 3001; // Usaremos 3001 para o backend, para não conflitar com o React que usa 3000

app.use(cors()); // Habilita o CORS
app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições

// Rotas da API
app.use('/products', productRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/associations', productSupplierRoutes);

// Rota de teste inicial
app.get('/', (req, res) => {
    res.send('Olá, Mundo! Servidor Backend funcionando.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});