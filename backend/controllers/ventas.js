const express = require('express');
const router = express.Router();

let inventario = [
  { id: 1, nombre: 'Laptop Oficina (i5, 8GB, 256GB SSD)', cantidad: 12, precio: 17500 },
  { id: 2, nombre: 'Laptop Gamer (RTX 3050, 16GB RAM, 512GB SSD)', cantidad: 8, precio: 34000 },
  { id: 3, nombre: 'Laptop Ultra (i7, 16GB, 1TB SSD)', cantidad: 6, precio: 42000 },
  { id: 4, nombre: 'PC Escritorio (Ryzen 5, 16GB, 512GB SSD)', cantidad: 10, precio: 22000 },
  { id: 5, nombre: 'Monitor 24" Full HD', cantidad: 15, precio: 4800 }
];

let ventas = [];

router.post('/', (req, res) => {
  const { idProducto, cantidad } = req.body;
  const producto = inventario.find(p => p.id == idProducto);

  if (producto && producto.cantidad >= cantidad) {
    producto.cantidad -= cantidad;
    const total = producto.precio * cantidad;
    const venta = { idProducto, nombre: producto.nombre, cantidad, total };
    ventas.push(venta);
    res.json({ mensaje: 'Venta registrada', venta });
  } else {
    res.status(400).json({ mensaje: 'Producto no disponible o cantidad insuficiente' });
  }
});

router.get('/', (req, res) => {
  res.json(ventas);
});

module.exports = router;
