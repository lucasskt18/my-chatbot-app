import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './WebSearchButton.css';

const WebSearchButton = () => {
    return (
        <button className="web-search-button" aria-label="Buscar na internet">
            <FontAwesomeIcon icon={faGlobe} size="lg" /> {/* Ícone de globo */}
        </button>
    );
};

export default WebSearchButton;
