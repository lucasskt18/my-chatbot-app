import React from 'react';
import './OptionsBar.css'; // Importando o CSS para o componente

const OptionsBar = () => {
    const options = [
        { label: "Criar imagem", icon: "📷" },
        { label: "Fazer um plano", icon: "📝" },
        { label: "Resumir texto", icon: "📄" },
        { label: "Analisar imagens", icon: "🔍" },
        { label: "Mais", icon: "..." }
    ];

    return (
        <div className="options-bar">
            {options.map((option, index) => (
                <button key={index} className="option-button">
                    {option.icon} {option.label}
                </button>
            ))}
        </div>
    );
};

export default OptionsBar;
