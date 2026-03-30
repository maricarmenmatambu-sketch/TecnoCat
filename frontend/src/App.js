import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importar páginas
import Home from './pages/Home';
import Inventario from './pages/Inventario';
import Ventas from './pages/Ventas';
import Alertas from './pages/Alertas';
import Proveedores from './pages/Proveedores';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', background: '#eee' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/inventario" style={{ marginRight: '10px' }}>Inventario</Link>
          <Link to="/ventas" style={{ marginRight: '10px' }}>Ventas</Link>
          <Link to="/alertas" style={{ marginRight: '10px' }}>Alertas</Link>
          <Link to="/proveedores" style={{ marginRight: '10px' }}>Proveedores</Link>
          <Link to="/login">Login</Link>
        </nav>

        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/alertas" element={<Alertas />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
