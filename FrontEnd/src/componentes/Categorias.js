import React from 'react';
import { Link } from 'react-router-dom';
import './estilo/Categorias.css'; // Opcional: para estilos personalizados

const Categorias = () => {
  return (

    <div className="categories-container">
      <div className="category">
        <Link to="/hombres">
          <img
            src="./img/hombre.jpeg"
            alt="Hombres"
            className="category-image"
          />
          <p className="category-text">Hombres</p>
        </Link>
      </div>
      <div className="category">
        <Link to="/mujeres">
          <img
            src="./img/mujer.jpeg"
            alt="Mujeres"
            className="category-image"
          />
          <p className="category-text">Mujeres</p>
        </Link>
      </div>
      <div className="category">
        <Link to="/ninos">
          <img
            src="./img/niño.jpeg"
            alt="Niños"
            className="category-image"
          />
          <p className="category-text">Niños</p>
        </Link>
      </div>
      <div className="category">
        <Link to="/ninas">
          <img
            src="./img/niña.jpeg"
            alt="Niñas"
            className="category-image"
          />
          <p className="category-text">Niñas</p>
        </Link>
      </div>
    </div>
  );
};

export default Categorias;
