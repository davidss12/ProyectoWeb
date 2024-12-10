import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo/SobreMiTienda.css'
const SobreMiTienda = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Video */}
        <div className="col-md-6">
          <div className="ratio ratio-16x9">
            <video
              src="./video/anuncio1.mp4" 
              title="Sobre Mi Tienda"
              controls
              className="rounded shadow w-100"
            ></video>
          </div>
        </div>

        {/* Texto */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Bienvenidos a Pasos Infinity</h2>
          <p className="text-muted">
            En Pasos Infinity, ofrecemos productos de alta calidad para toda la familia. Nuestro compromiso es brindar la mejor experiencia de compra posible, con un enfoque en el servicio al cliente y la innovación.
          </p>
          <p className="text-muted">
            Explora nuestras categorías para hombres, mujeres, niños y niñas, y descubre lo mejor en moda y estilo. ¡Gracias por elegirnos!
          </p>
          <a href="/productos" className="btn btn-primary mt-3">
            Explorar Productos
          </a>
        </div>
      </div>
    </div>
  );
};

export default SobreMiTienda;
