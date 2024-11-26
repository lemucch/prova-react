import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import "./About.css"; // CSS separado para estilizar o componente

const About = () => {
  return (
    <div className="about-card">
      <p>
      Olá! Eu sou o Geovani. Especialista em criação de conteúdo digital, design gráfico e desenvolvimento de sites. Tenho experiência em todos os estágios de projetos criativos e tecnológicos, desde o conceito até a execução. Estou aberto a colaborar em novos desafios que impulsionem minhas habilidades e gerem impacto positivo.
      </p>
      <div className="about-buttons">
        <a
          href="https://github.com/GSSADS/GSSADS" 
          target="_blank"
          rel="noopener noreferrer"
          className="button github-button"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://wa.me/5544998077649"
          target="_blank"
          rel="noopener noreferrer"
          className="button whatsapp-button"
        >
          <FaWhatsapp /> Entre em contato
        </a>
      </div>
    </div>
  );
};

export default About;