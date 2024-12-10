import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Ninos = () => {
  // Ejemplo de 20 productos para mostrar
  const productos = [
    { id: 1, nombre: 'Zapatillas Running Niño', descripcion: 'Zapatillas ligeras y cómodas para tus pequeños corredores.', imagen: 'https://via.placeholder.com/150', precio: 'S/129.99' },
    { id: 2, nombre: 'Zapatillas Deportivas Niño', descripcion: 'Perfectas para las actividades deportivas y recreativas de los niños.', imagen: 'https://via.placeholder.com/150', precio: 'S/109.99' },
    { id: 3, nombre: 'Zapatillas Casual Niño', descripcion: 'Comodidad y estilo para el día a día de los niños.', imagen: 'https://via.placeholder.com/150', precio: 'S/99.99' },
    { id: 4, nombre: 'Zapatillas con Velcro', descripcion: 'Fáciles de poner y quitar, ideales para los más pequeños.', imagen: 'https://via.placeholder.com/150', precio: 'S/89.99' },
    { id: 5, nombre: 'Zapatillas de Fútbol Niño', descripcion: 'Para los pequeños futbolistas, mejorando su juego en el campo.', imagen: 'https://via.placeholder.com/150', precio: 'S/149.99' },
    { id: 6, nombre: 'Zapatillas de Trail Niño', descripcion: 'Zapatillas resistentes para correr y explorar en terrenos irregulares.', imagen: 'https://via.placeholder.com/150', precio: 'S/159.99' },
    { id: 7, nombre: 'Zapatillas de Skate Niño', descripcion: 'Diseñadas para pequeños skaters, resistentes y de alto rendimiento.', imagen: 'https://via.placeholder.com/150', precio: 'S/129.99' },
    { id: 8, nombre: 'Zapatillas con Luz Niño', descripcion: 'Zapatillas divertidas con luces LED para hacer cada paso más especial.', imagen: 'https://via.placeholder.com/150', precio: 'S/119.99' },
    { id: 9, nombre: 'Zapatillas Deportivas con Plantilla Niño', descripcion: 'Soporte y comodidad para horas de juego sin molestias.', imagen: 'https://via.placeholder.com/150', precio: 'S/139.99' },
    { id: 10, nombre: 'Zapatillas de Compresión Niño', descripcion: 'Ideal para mejorar el rendimiento y la recuperación de los niños activos.', imagen: 'https://via.placeholder.com/150', precio: 'S/179.99' },
    { id: 11, nombre: 'Zapatillas con Cordones Niño', descripcion: 'Comodidad y ajuste perfecto, con cordones que se ajustan a sus pies.', imagen: 'https://via.placeholder.com/150', precio: 'S/109.99' },
    { id: 12, nombre: 'Zapatillas Running Niño Pro', descripcion: 'Para los pequeños corredores que buscan una mayor velocidad y confort.', imagen: 'https://via.placeholder.com/150', precio: 'S/159.99' },
    { id: 13, nombre: 'Zapatillas Infantiles', descripcion: 'Zapatillas suaves y cómodas para los primeros pasos de tu hijo.', imagen: 'https://via.placeholder.com/150', precio: 'S/89.99' },
    { id: 14, nombre: 'Zapatillas con Suela Antideslizante Niño', descripcion: 'Seguridad para tus hijos mientras juegan o corren.', imagen: 'https://via.placeholder.com/150', precio: 'S/119.99' },
    { id: 15, nombre: 'Zapatillas de Baile Niño', descripcion: 'Para los pequeños bailarines, flexibles y cómodas.', imagen: 'https://via.placeholder.com/150', precio: 'S/129.99' },
    { id: 16, nombre: 'Zapatillas de Trekking Niño', descripcion: 'Zapatillas ideales para explorar el mundo al aire libre.', imagen: 'https://via.placeholder.com/150', precio: 'S/149.99' },
    { id: 17, nombre: 'Zapatillas de Senderismo Niño', descripcion: 'Ligeras y resistentes, perfectas para aventuras en la naturaleza.', imagen: 'https://via.placeholder.com/150', precio: 'S/159.99' },
    { id: 18, nombre: 'Zapatillas de Alta Velocidad Niño', descripcion: 'Para los niños que corren más rápido que nadie.', imagen: 'https://via.placeholder.com/150', precio: 'S/169.99' },
    { id: 19, nombre: 'Zapatillas de Agua Niño', descripcion: 'Ideales para actividades acuáticas y juegos en la playa.', imagen: 'https://via.placeholder.com/150', precio: 'S/109.99' },
    { id: 20, nombre: 'Zapatillas Infantiles con Diseño Animal', descripcion: 'Divertidas y cómodas, con un diseño que encantará a tus pequeños.', imagen: 'https://via.placeholder.com/150', precio: 'S/119.99' },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>Zapatillas para Niños</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Encuentra las zapatillas más cómodas y resistentes para tus hijos, ideales para cualquier actividad.
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

export default Ninos;
