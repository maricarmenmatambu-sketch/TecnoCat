import React, { useState, useEffect } from "react";
import axios from "axios";

function Ventas() {
  const [productos, setProductos] = useState([]);
  const [productoId, setProductoId] = useState("");
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5000/inventario")
      .then(res => setProductos(res.data))
      .catch(err => console.log(err));
  }, []);

  const registrarVenta = () => {
    axios.post("http://localhost:5000/ventas", { productoId, cantidad })
      .then(res => alert("Venta registrada"))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Ventas</h2>
      <select onChange={e => setProductoId(e.target.value)} value={productoId}>
        <option value="">Selecciona un producto</option>
        {productos.map(p => (
          <option key={p.id} value={p.id}>{p.nombre}</option>
        ))}
      </select>
      <input type="number" min="1" value={cantidad} onChange={e => setCantidad(e.target.value)} />
      <button onClick={registrarVenta}>Registrar Venta</button>
    </div>
  );
}

export default Ventas;
