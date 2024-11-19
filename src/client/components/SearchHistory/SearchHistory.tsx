import React from 'react';
import './SearchHistory.css'; 

const SearchHistory = () => {
    const historyItems = [
        "Pré-carregamento de imagens",
        "Problema de Carregamento de imagens",
        "Carregamento rápido de imagem",
        "Atraso Carregamento Imagens",
        "Importar JS no Laravel",
        "Projetos com TypeScript",
        "Melhorar Funil de Vendas",
        "Projetos TypeScript Iniciante",
        "Projetos Golang e TS",
        "Referência de Cleave.js",
        "Espaçamento Label Calendário",
        "Ajuste de Layout botão",
        "Ajuste de Layout"
    ];

    return (
        <div className="search-history">
            <h2>Histórico de Pesquisa</h2>
            <ul>
                {historyItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchHistory;