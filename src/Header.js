import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Header.css";
import Noticias from "./Noticias";

function Header() {
  return (
    <header className="alt-header">
      {/* Seção do Banner */}
      <div className="alt-banner">
        <h1>Fernando Henrique Boschini Lemucch</h1>
        <p>Desenvolvedor Full Stack | Designer Gráfico | Criador de Conteúdo</p>
      </div>

      {/* Seção do Perfil */}
      <div className="alt-profile">
        <div className="alt-profile-card">
          <div className="alt-profile-image">
            <img
              src="https://w7.pngwing.com/pngs/723/455/png-transparent-homer-simpson-bart-simpson-lisa-simpson-marge-simpson-peter-griffin-simpsons-homer-simpson-face-heroes-springfield-thumbnail.png"
              alt="Fernando Henrique Boschini Lemucch"
              className="alt-image"
            />
          </div>
          <div className="alt-profile-info">
            <ul>
              <li><strong>Idade:</strong> 40</li>
              <li><strong>Endereço:</strong> maringa , Paraná, Brasil</li>
              <li><strong>E-mail:</strong> fernando.henrique@email.com</li>
              <li><strong>Telefone:</strong> +55 41 99999-9999</li>
            </ul>
            <div className="alt-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <Noticias />
            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
