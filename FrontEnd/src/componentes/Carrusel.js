import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './estilo/Carrusel.css';  // Importamos el archivo de estilos CSS
const Carrusel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/fondo5.jpeg"
          alt="First slide"
          style={{ height: "500px", objectFit: "cover" }}

        />
        <Carousel.Caption>
          <h5>Renueva tu Estilo con Nuestras Ofertas</h5>
          <p>"Explora lo último en moda y aprovecha nuestras promociones exclusivas en toda la tienda."

</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/fondo6.jpg"
          alt="Second slide"
          style={{ height: "500px", objectFit: "cover" }}

        />
        <Carousel.Caption>
          <h5>Lo Mejor de la Moda, A Tu Alcance</h5>
          <p>Desde lo más trendy hasta lo clásico, encuentra todo lo que necesitas para cada ocasión, ¡con precios que te encantarán</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/fondo9.jpg"
          alt="Third slide"
          style={{ height: "500px", objectFit: "cover" }}

        />
        <Carousel.Caption>
          <h5>Vistiendo Tu Mundo con Estilo</h5>
          <p>
          Desde ropa casual hasta elegantes atuendos, todo lo que buscas para tu guardarropa está aquí. ¡Compra hoy y ahorra!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
