import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Hombres = () => {
  // Ejemplo de 20 productos para mostrar
  const productos = [
    { id: 1, nombre: 'Zapatillas Running', descripcion: 'Perfectas para correr largas distancias. Cómodas y resistentes.', imagen: './img/1.jpg', precio: 'S/199.99' },
    { id: 2, nombre: 'Zapatillas Deportivas', descripcion: 'Para entrenamientos intensos, con soporte y flexibilidad.', imagen: './img/2.jpg', precio: 'S/149.99' },
    { id: 3, nombre: 'Zapatillas Casual', descripcion: 'Diseño moderno y cómodo para el día a día.', imagen: './img/3.jpg', precio: 'S/129.99' },
    { id: 4, nombre: 'Zapatillas de Cuero', descripcion: 'Resistentes y elegantes para el uso diario.', imagen: './img/4.jpg', precio: 'S/179.99' },
    { id: 5, nombre: 'Zapatillas de Trail', descripcion: 'Ideales para correr en senderos y terrenos irregulares.', imagen: './img/5.jpg', precio: 'S/219.99' },
    { id: 6, nombre: 'Zapatillas de Baloncesto', descripcion: 'Zapatillas de alto rendimiento para deportes intensos.', imagen: './img/6.jpg', precio: 'S/249.99' },
    { id: 7, nombre: 'Zapatillas de Fútbol', descripcion: 'Para mejorar tu juego en el campo.', imagen: './img/7.jpg', precio: 'S/229.99' },
    { id: 8, nombre: 'Zapatillas Running Pro', descripcion: 'Para los corredores más exigentes, máxima comodidad.', imagen: './img/8.jpg', precio: 'S/299.99' },
    { id: 9, nombre: 'Zapatillas con Tecnología Air', descripcion: 'Sistema de aire para mayor comodidad al caminar.', imagen: './img/9.jpg', precio: 'S/249.99' },
    { id: 10, nombre: 'Zapatillas Deportivas con Soporte', descripcion: 'Perfectas para entrenamientos largos.', imagen: './img/10.jpg', precio: 'S/159.99' },
    { id: 11, nombre: 'Zapatillas Urbanas', descripcion: 'Estilo urbano y moderno, para todo tipo de actividades.', imagen: './img/11.jpg', precio: 'S/139.99' },
    { id: 12, nombre: 'Zapatillas de Alta Velocidad', descripcion: 'Máxima ligereza y velocidad.', imagen: './img/12.jpg', precio: 'S/259.99' },
    { id: 13, nombre: 'Zapatillas con Plantilla Antibacterial', descripcion: 'Comodidad y frescura durante todo el día.', imagen: './img/13.jpg', precio: 'S/179.99' },
    { id: 14, nombre: 'Zapatillas de Entrenamiento', descripcion: 'Soporte ideal para actividades físicas intensas.', imagen: './img/14.jpg', precio: 'S/169.99' },
    { id: 15, nombre: 'Zapatillas de Skate', descripcion: 'Duraderas y diseñadas para patinar.', imagen: './img/15.jpg', precio: 'S/219.99' },
    { id: 16, nombre: 'Zapatillas con Suela Antideslizante', descripcion: 'Seguridad y comodidad al caminar.', imagen: './img/16.jpg', precio: 'S/159.99' },
    { id: 17, nombre: 'Zapatillas de Trekking', descripcion: 'Ideales para aventuras al aire libre.', imagen: './img/17.jpg', precio: 'S/249.99' },
    { id: 18, nombre: 'Zapatillas con Diseño Deportivo', descripcion: 'Estilo deportivo para todos los días.', imagen: './img/18.jpg', precio: 'S/189.99' },
    { id: 19, nombre: 'Zapatillas de Compresión', descripcion: 'Mejoran el rendimiento y recuperación muscular.', imagen: './img/19.jpg', precio: 'S/269.99' },
    { id: 20, nombre: 'Zapatillas con Cordones Elásticos', descripcion: 'Diseño innovador con facilidad de ajuste.', imagen: './img/20.jpg', precio: 'S/179.99' },
  ];


  const handleCompra = async (productoId) => {
    try {
      const response = await axios.post('http://localhost:5000/api/compras', {
        productoId,
        cantidad: 1, // Cantidad fija, puede personalizarse
      });

      if (response.data.success) {
        alert('Compra registrada con éxito');
      } else {
        alert('Error al registrar la compra: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error al registrar la compra:', error);
      alert('Hubo un problema al registrar la compra.');
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>Zapatillas para Hombres</h1>
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
                  <Button variant="primary" onClick={() => handleCompra(producto.id)}>Comprar</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Hombres;
