const express = require('express');
const router = express.Router();

let inventario = require('./inventario').inventario || [];

router.get('/', (req, res) => {
  const alertas = inventario.filter(p => p.cantidad <= 5);
  res.json({ alertas });
});

module.exports = router;
