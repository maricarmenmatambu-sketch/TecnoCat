const express = require('express');
const router = express.Router();

let inventario = [
  { id: 1, nombre: 'Laptop Oficina (i5, 8GB, 256GB SSD)', cantidad: 12, precio: 17500 },
  { id: 2, nombre: 'Laptop Gamer (RTX 3050, 16GB RAM, 512GB SSD)', cantidad: 8, precio: 34000 },
  { id: 3, nombre: 'Laptop Ultra (i7, 16GB, 1TB SSD)', cantidad: 6, precio: 42000 },
  { id: 4, nombre: 'PC Escritorio (Ryzen 5, 16GB, 512GB SSD)', cantidad: 10, precio: 22000 },
  { id: 5, nombre: 'Monitor 24" Full HD', cantidad: 15, precio: 4800 }
];

router.get('/', (req, res) => {
  res.json(inventario);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { cantidad } = req.body;
  const producto = inventario.find(p => p.id == id);
  if (producto) {
    producto.cantidad = cantidad;
    res.json({ mensaje: 'Stock actualizado', producto });
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
});

module.exports = router;
