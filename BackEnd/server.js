const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors()); // Para permitir solicitudes CORS desde el frontend
app.use(bodyParser.json()); // Para parsear los datos JSON recibidos

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia con tus credenciales de MySQL
  password: '',
  database: 'tienda', // Cambia con el nombre de tu base de datos
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conexión a la base de datos establecida');
});

// Ruta para registrar un usuario
app.post('/api/registro', (req, res) => {
  const { nombre, correo, contrasena } = req.body;

  if (!nombre || !correo || !contrasena) {
    return res.status(400).json({ success: false, message: 'Faltan campos' });
  }

  // Hash de la contraseña
  bcrypt.hash(contrasena, 10, (err, hashedPassword) => {
    if (err) throw err;

    // Insertar el usuario en la base de datos
    const sql = 'INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)';
    db.query(sql, [nombre, correo, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error al registrar el usuario' });
      }
      res.status(200).json({ success: true, message: 'Usuario registrado con éxito' });
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
