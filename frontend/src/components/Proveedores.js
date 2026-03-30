import React, { useState, useEffect } from "react";
import axios from "axios";

function Proveedores() {
  const [proveedores, setProveedores] = useState([]);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/proveedores")
      .then(res => setProveedores(res.data))
      .catch(err => console.log(err));
  }, []);

  const agregarProveedor = () => {
    axios.post("http://localhost:5000/proveedores", { nombre })
      .then(res => {
        setProveedores([...proveedores, res.data]);
        setNombre("");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Proveedores</h2>
      <input type="text" placeholder="Nombre proveedor" value={nombre} onChange={e => setNombre(e.target.value)} />
      <button onClick={agregarProveedor}>Agregar Proveedor</button>
      <ul>
        {proveedores.map(p => (
          <li key={p.id}>{p.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Proveedores;
