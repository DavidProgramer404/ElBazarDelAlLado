const express = require('express');
const fs = require('fs');
const path = require('path');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs.json' }),
    new winston.transports.Console()
  ]
});

const app = express();

// Servir archivos estáticos (HTML, CSS, JS, imágenes)
app.use(express.static('.'));

const PORT = process.env.PORT || 8080;

// Middleware para CORS básico (si es necesario)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Servir archivos estáticos
app.use(express.static('.'));

// Ruta para obtener todos los productos
app.get('/productos', (req, res) => {
  logger.info('Solicitud a /productos');
  fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer los productos' });
    }
    const productos = JSON.parse(data);
    res.json(productos);
  });
});

// Ruta para obtener un producto por ID
app.get('/productos/:id', (req, res) => {
  logger.info(`Solicitud a /productos/${req.params.id}`);
  const id = parseInt(req.params.id);
  fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer los productos' });
    }
    const productos = JSON.parse(data);
    const producto = productos.find(p => p.id === id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});