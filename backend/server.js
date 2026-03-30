const express = require('express');
const app = express();

app.use(express.json());

const inventarioRoutes = require('./controllers/inventario');
const ventasRoutes = require('./controllers/ventas');
const alertasRoutes = require('./controllers/alertas');
const proveedoresRoutes = require('./controllers/proveedores');
const loginRoutes = require('./controllers/login');

app.use('/inventario', inventarioRoutes);
app.use('/ventas', ventasRoutes);
app.use('/alertas', alertasRoutes);
app.use('/proveedores', proveedoresRoutes);
app.use('/login', loginRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
