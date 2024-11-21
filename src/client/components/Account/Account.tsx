// src/client/components/Account/Account.tsx
import React, { useState } from "react";
import { FaUser } from "react-icons/fa"; // Ícone do usuário
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Ícone do Gmail
import "./Account.css"; // Importando o CSS

const Account = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Alterna a visibilidade do dropdown
  };

  return (
    <div
      className="account-container"
      style={{ position: "absolute", top: 10, right: 10 }}
    >
      <FaUser
        onClick={toggleDropdown}
        style={{ cursor: "pointer", fontSize: "24px" }}
      />
      {isOpen && (
        <div className="account-dropdown">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "white", marginRight: "8px" }}
              />
              Gmail
            </li>
            <li>Tema</li>
            <li>Configuração</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Account;
