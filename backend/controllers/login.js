const express = require('express');
const router = express.Router();

const usuarios = [
  { id: 1, usuario: 'admin', password: '1234' },
  { id: 2, usuario: 'vendedor', password: 'abcd' }
];

router.post('/', (req, res) => {
  const { usuario, password } = req.body;
  const user = usuarios.find(u => u.usuario === usuario && u.password === password);
  if (user) {
    res.json({ mensaje: 'Login exitoso' });
  } else {
    res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
  }
});

module.exports = router;
