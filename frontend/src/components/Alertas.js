import React, { useEffect, useState } from "react";
import axios from "axios";

function Alertas() {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/alertas")
      .then(res => setAlertas(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Alertas de Stock Bajo</h2>
      <ul>
        {alertas.map(a => (
          <li key={a.id}>{a.nombre} - Stock: {a.stock}</li>
        ))}
      </ul>
    </div>
  );
}

export default Alertas;
