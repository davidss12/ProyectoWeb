import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Hombres = () => {
  // Ejemplo de 20 productos para mostrar
  const productos = [
    { id: 1, nombre: 'Zapatillas Running', descripcion: 'Perfectas para correr largas distancias. Cómodas y resistentes.', imagen: 'https://via.placeholder.com/150', precio: 'S/199.99' },
    { id: 2, nombre: 'Zapatillas Deportivas', descripcion: 'Para entrenamientos intensos, con soporte y flexibilidad.', imagen: 'https://via.placeholder.com/150', precio: 'S/149.99' },
    { id: 3, nombre: 'Zapatillas Casual', descripcion: 'Diseño moderno y cómodo para el día a día.', imagen: 'https://via.placeholder.com/150', precio: 'S/129.99' },
    { id: 4, nombre: 'Zapatillas de Cuero', descripcion: 'Resistentes y elegantes para el uso diario.', imagen: 'https://via.placeholder.com/150', precio: 'S/179.99' },
    { id: 5, nombre: 'Zapatillas de Trail', descripcion: 'Ideales para correr en senderos y terrenos irregulares.', imagen: 'https://via.placeholder.com/150', precio: 'S/219.99' },
    { id: 6, nombre: 'Zapatillas de Baloncesto', descripcion: 'Zapatillas de alto rendimiento para deportes intensos.', imagen: 'https://via.placeholder.com/150', precio: 'S/249.99' },
    { id: 7, nombre: 'Zapatillas de Fútbol', descripcion: 'Para mejorar tu juego en el campo.', imagen: 'https://via.placeholder.com/150', precio: 'S/229.99' },
    { id: 8, nombre: 'Zapatillas Running Pro', descripcion: 'Para los corredores más exigentes, máxima comodidad.', imagen: 'https://via.placeholder.com/150', precio: 'S/299.99' },
    { id: 9, nombre: 'Zapatillas con Tecnología Air', descripcion: 'Sistema de aire para mayor comodidad al caminar.', imagen: 'https://via.placeholder.com/150', precio: 'S/249.99' },
    { id: 10, nombre: 'Zapatillas Deportivas con Soporte', descripcion: 'Perfectas para entrenamientos largos.', imagen: 'https://via.placeholder.com/150', precio: 'S/159.99' },
    { id: 11, nombre: 'Zapatillas Urbanas', descripcion: 'Estilo urbano y moderno, para todo tipo de actividades.', imagen: 'https://via.placeholder.com/150', precio: 'S/139.99' },
    { id: 12, nombre: 'Zapatillas de Alta Velocidad', descripcion: 'Máxima ligereza y velocidad.', imagen: 'https://via.placeholder.com/150', precio: 'S/259.99' },
    { id: 13, nombre: 'Zapatillas con Plantilla Antibacterial', descripcion: 'Comodidad y frescura durante todo el día.', imagen: 'https://via.placeholder.com/150', precio: 'S/179.99' },
    { id: 14, nombre: 'Zapatillas de Entrenamiento', descripcion: 'Soporte ideal para actividades físicas intensas.', imagen: 'https://via.placeholder.com/150', precio: 'S/169.99' },
    { id: 15, nombre: 'Zapatillas de Skate', descripcion: 'Duraderas y diseñadas para patinar.', imagen: 'https://via.placeholder.com/150', precio: 'S/219.99' },
    { id: 16, nombre: 'Zapatillas con Suela Antideslizante', descripcion: 'Seguridad y comodidad al caminar.', imagen: 'https://via.placeholder.com/150', precio: 'S/159.99' },
    { id: 17, nombre: 'Zapatillas de Trekking', descripcion: 'Ideales para aventuras al aire libre.', imagen: 'https://via.placeholder.com/150', precio: 'S/249.99' },
    { id: 18, nombre: 'Zapatillas con Diseño Deportivo', descripcion: 'Estilo deportivo para todos los días.', imagen: 'https://via.placeholder.com/150', precio: 'S/189.99' },
    { id: 19, nombre: 'Zapatillas de Compresión', descripcion: 'Mejoran el rendimiento y recuperación muscular.', imagen: 'https://via.placeholder.com/150', precio: 'S/269.99' },
    { id: 20, nombre: 'Zapatillas con Cordones Elásticos', descripcion: 'Diseño innovador con facilidad de ajuste.', imagen: 'https://via.placeholder.com/150', precio: 'S/179.99' },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop:'40px' }}>Zapatillas para Hombres</h1>
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

export default Hombres;
