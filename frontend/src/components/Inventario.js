import React, { useEffect, useState } from "react";
import axios from "axios";

function Inventario() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/inventario")
      .then(res => setProductos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {productos.map(p => (
          <li key={p.id}>{p.nombre} - ${p.precio} - Stock: {p.stock}</li>
        ))}
      </ul>
    </div>
  );
}

export default Inventario;
