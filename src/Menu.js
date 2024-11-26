import React, { useState } from 'react';  // Verifique se useState está importado
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    // Função para alternar o estado
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Altera o estado para mostrar ou esconder o menu
    };

    return (
        <nav className="menu">
            <div className="menu-logo">
            </div>
            {/* Adiciona a classe 'open' quando isOpen é true */}
            <div className={`menu-links ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Início</Link></li>

                    <li><Link to="/Contato">Contato</Link></li>
                    <li><Link to="/CadastroNoticia">AD Cadastra Projeto</Link></li>
                    <li><Link to="/AdmListaNoticias">AD Lista Projeto</Link></li>
                    
                </ul>
            </div>
            {/* Ícone de hambúrguer para alternar o menu */}
            <div className="menu-toggle" onClick={toggleMenu}>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
            </div>
        </nav>
    );
}

export default Menu;
