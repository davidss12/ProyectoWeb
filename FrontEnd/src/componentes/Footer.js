import React from 'react';
import './estilo/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" >
        <ul className="footer-links">
          <li><a href="/about">Acerca de Nosotros</a></li>
          <li><a href="/contact">Contáctanos</a></li>
          <li><a href="/privacy-policy">Política de Privacidad</a></li>
          <li><a href="/terms">Términos y Condiciones</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="copy-right">
          <p>&copy; {new Date().getFullYear()} Pasos Infinity. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
