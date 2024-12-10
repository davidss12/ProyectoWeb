import React, { useState } from 'react';
import axios from 'axios'; 

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (!nombre || !correo || !contrasena) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/registro', {
        nombre,
        correo,
        contrasena,
      });

      if (response.data.success) {
        setMensaje('Usuario registrado exitosamente');
      } else {
        setMensaje('Hubo un error al registrar el usuario');
      }
    } catch (error) {
      setMensaje('Error de conexión. Intenta de nuevo más tarde.');
    }
  };

  return (
    <div className="container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>

      {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
    </div>
  );
};

export default Registro;
