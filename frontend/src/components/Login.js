import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loggeado, setLoggeado] = useState(false);

  const iniciarSesion = () => {
    axios.post("http://localhost:5000/login", { usuario, password })
      .then(res => setLoggeado(true))
      .catch(err => alert("Usuario o contraseña incorrecta"));
  };

  return (
    <div>
      <h2>Login</h2>
      {loggeado ? <p>¡Sesión iniciada!</p> :
      <>
        <input type="text" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={iniciarSesion}>Iniciar Sesión</button>
      </>}
    </div>
  );
}

export default Login;
