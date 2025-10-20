// src/App.js

import React, { useState } from 'react';
import './App.css'; // Mantenha ou remova se não for usar estilos padrão
import ProductPage from './pages/ProductPage';
import SupplierPage from './pages/SupplierPage';
import ProductSupplierAssociationPage from './pages/ProductSupplierAssociationPage';

function App() {
    const [currentPage, setCurrentPage] = useState('products'); // Estado para controlar a página atual

    const renderPage = () => {
        switch (currentPage) {
            case 'products':
                return <ProductPage />;
            case 'suppliers':
                return <SupplierPage />;
            case 'associations':
                return <ProductSupplierAssociationPage />;
            default:
                return <ProductPage />;
        }
    };

    return (
        <div className="App">
            <nav style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0' }}>
                <button style={{ marginRight: '10px' }} onClick={() => setCurrentPage('products')}>Produtos</button>
                <button style={{ marginRight: '10px' }} onClick={() => setCurrentPage('suppliers')}>Fornecedores</button>
                <button onClick={() => setCurrentPage('associations')}>Associações</button>
            </nav>
            <main>
                {renderPage()}
            </main>
        </div>
    );
}

export default App;