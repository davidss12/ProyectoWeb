import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';  // Importamos el componente Link de react-router-dom
import './estilo/Nav.css';  // Importamos el archivo de estilos CSS

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white" style={{ backgroundColor: '#343a40', height: '80px', padding: '0 50px' }}>
      <div className="container-fluid">
        {/* Logo con estilo personalizado */}
        <Link className="navbar-brand fw-bold text-uppercase" to="/" style={{ color: '#ffc107', fontSize: '30px' }}>
          Tienda YTS
        </Link>
        {/* Botón para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Opciones de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white px-4 py-3 custom-hover" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-4 py-3 custom-hover" to="/registro">  {/* Cambié la ruta aquí */}
                Registrate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-4 py-3 custom-hover" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
