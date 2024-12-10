import React, { useState } from 'react';
import './estilo/Reseñas.css';

const Reseñas = () => {
  const [reseñas, setReseñas] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      calificación: 5,
      comentario: "Excelente tienda, muy buena atención y productos de calidad."
    },
    {
      id: 2,
      nombre: "Ana Gómez",
      calificación: 4,
      comentario: "Buen servicio, aunque me gustaría ver más variedad de productos."
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      calificación: 3,
      comentario: "La tienda es buena, pero los precios son un poco altos. Aún así, la calidad es buena."
    },
  ]);

  const [nuevoComentario, setNuevoComentario] = useState('');
  const [nombre, setNombre] = useState('');
  const [calificación, setCalificación] = useState(5);

  const manejarComentario = (e) => {
    setNuevoComentario(e.target.value);
  };

  const manejarNombre = (e) => {
    setNombre(e.target.value);
  };

  const manejarCalificación = (e) => {
    setCalificación(e.target.value);
  };

  const agregarReseña = (e) => {
    e.preventDefault();
    if (nuevoComentario && nombre) {
      const nuevaReseña = {
        id: reseñas.length + 1,
        nombre: nombre,
        calificación: parseInt(calificación),
        comentario: nuevoComentario
      };
      setReseñas([...reseñas, nuevaReseña]);
      setNuevoComentario('');
      setNombre('');
      setCalificación(5);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-3">Reseñas de Nuestros Clientes</h2>
      
      <div className="row">
        <div className="col-md-12">
          {/* Lista de Reseñas */}
          <div className="row">
            {reseñas.map((reseña) => (
              <div key={reseña.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{reseña.nombre}</h5>
                    <p className="card-text">Calificación: {reseña.calificación} / 5</p>
                    <p className="card-text">{reseña.comentario}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formulario para agregar nueva reseña */}
      <div className="row mt-5">
        <div className="col-md-12">
          <h4>Deja tu Reseña</h4>
          <form onSubmit={agregarReseña}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={manejarNombre}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Calificación</label>
              <select
                className="form-control"
                value={calificación}
                onChange={manejarCalificación}
                required
              >
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Comentario</label>
              <textarea
                className="form-control"
                rows="3"
                value={nuevoComentario}
                onChange={manejarComentario}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar Reseña</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reseñas;
