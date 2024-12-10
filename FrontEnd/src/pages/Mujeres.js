import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Mujeres = () => {
  // Ejemplo de 20 productos para mostrar
  const productos = [
    { id: 1, nombre: 'Zapatillas Running Mujer', descripcion: 'Ideales para correr con estilo, cómodas y ligeras.', imagen: './img/21.jpg', precio: 'S/199.99' },
    { id: 2, nombre: 'Zapatillas Deportivas Mujer', descripcion: 'Diseño dinámico para entrenamientos intensos, con soporte y flexibilidad.', imagen: './img/22.jpg', precio: 'S/149.99' },
    { id: 3, nombre: 'Zapatillas Casual Mujer', descripcion: 'Diseño cómodo y moderno para el día a día.', imagen: './img/23.jpg', precio: 'S/129.99' },
    { id: 4, nombre: 'Zapatillas de Cuero Mujer', descripcion: 'Elegantes y resistentes para el uso diario.', imagen: './img/24.jpg', precio: 'S/179.99' },
    { id: 5, nombre: 'Zapatillas de Trail Mujer', descripcion: 'Perfectas para correr en terrenos irregulares y senderos.', imagen: './img/25.jpg', precio: 'S/219.99' },
    { id: 6, nombre: 'Zapatillas de Baloncesto Mujer', descripcion: 'Para deportes intensos, con soporte y amortiguación.', imagen: './img/26.jpg', precio: 'S/249.99' },
    { id: 7, nombre: 'Zapatillas de Fútbol Mujer', descripcion: 'Para mejorar tu rendimiento en el campo de fútbol.', imagen: './img/27.jpg', precio: 'S/229.99' },
    { id: 8, nombre: 'Zapatillas Running Pro Mujer', descripcion: 'Para corredoras exigentes, con máxima comodidad y rendimiento.', imagen: './img/28.jpg', precio: 'S/299.99' },
    { id: 9, nombre: 'Zapatillas con Tecnología Air Mujer', descripcion: 'Tecnología de aire para mayor confort en cada paso.', imagen: 'https://via.placeholder.com/150', precio: 'S/249.99' },
    { id: 10, nombre: 'Zapatillas Deportivas con Soporte Mujer', descripcion: 'Para entrenamientos largos y confort durante todo el día.', imagen: 'https://via.placeholder.com/150', precio: 'S/159.99' },
    { id: 11, nombre: 'Zapatillas Urbanas Mujer', descripcion: 'Estilo moderno y urbano, perfectas para todas tus actividades.', imagen: 'https://via.placeholder.com/150', precio: 'S/139.99' },
    { id: 12, nombre: 'Zapatillas de Alta Velocidad Mujer', descripcion: 'Ligereza y velocidad para las corredoras más rápidas.', imagen: 'https://via.placeholder.com/150', precio: 'S/259.99' },
    { id: 13, nombre: 'Zapatillas con Plantilla Antibacterial Mujer', descripcion: 'Comodidad todo el día con tecnología antibacteriana.', imagen: 'https://via.placeholder.com/150', precio: 'S/179.99' },
    { id: 14, nombre: 'Zapatillas de Entrenamiento Mujer', descripcion: 'Soporte ideal para entrenamientos intensos de fuerza.', imagen: 'https://via.placeholder.com/150', precio: 'S/169.99' },
    { id: 15, nombre: 'Zapatillas de Skate Mujer', descripcion: 'Diseñadas para patinar con resistencia y comodidad.', imagen: 'https://via.placeholder.com/150', precio: 'S/219.99' },
    { id: 16, nombre: 'Zapatillas con Suela Antideslizante Mujer', descripcion: 'Comodidad y seguridad al caminar con suela antideslizante.', imagen: 'https://via.placeholder.com/150', precio: 'S/159.99' },
    { id: 17, nombre: 'Zapatillas de Trekking Mujer', descripcion: 'Para aventuras al aire libre con gran resistencia.', imagen: 'https://via.placeholder.com/150', precio: 'S/249.99' },
    { id: 18, nombre: 'Zapatillas con Diseño Deportivo Mujer', descripcion: 'Estilo deportivo para actividades diarias.', imagen: 'https://via.placeholder.com/150', precio: 'S/189.99' },
    { id: 19, nombre: 'Zapatillas de Compresión Mujer', descripcion: 'Ayuda en el rendimiento y recuperación muscular.', imagen: 'https://via.placeholder.com/150', precio: 'S/269.99' },
    { id: 20, nombre: 'Zapatillas con Cordones Elásticos Mujer', descripcion: 'Diseño fácil de ajustar con cordones elásticos.', imagen: 'https://via.placeholder.com/150', precio: 'S/179.99' },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>Zapatillas para Mujeres</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Encuentra las mejores zapatillas para tus actividades, ya sea correr, entrenar o para tu estilo diario.
      </p>

      {/* Grid de productos */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4" style={{ padding: '0 10%' }}>
        {productos.map((producto) => (
          <Col key={producto.id}>
            <Card>
              <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{producto.precio}</span>
                  <Button variant="primary">Comprar</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Mujeres;
