const express = require('express');
const router = express.Router();

let proveedores = [
  { id: 1, nombre: 'Proveedor A', producto: 'Laptop Gamer' },
  { id: 2, nombre: 'Proveedor B', producto: 'PC Escritorio' }
];

router.get('/', (req, res) => {
  res.json(proveedores);
});

router.post('/', (req, res) => {
  const nuevoProveedor = { id: proveedores.length + 1, ...req.body };
  proveedores.push(nuevoProveedor);
  res.json({ mensaje: 'Proveedor agregado', nuevoProveedor });
});

module.exports = router;
