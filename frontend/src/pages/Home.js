import React from "react";
import Login from "../components/Login";
import Inventario from "../components/Inventario";
import Ventas from "../components/Ventas";
import Alertas from "../components/Alertas";
import Proveedores from "../components/Proveedores";

function Home() {
  return (
    <div>
      <h1>TecnoCat - Sistema de Gestión</h1>

      <section>
        <Login />
      </section>

      <section>
        <Inventario />
      </section>

      <section>
        <Ventas />
      </section>

      <section>
        <Alertas />
      </section>

      <section>
        <Proveedores />
      </section>
    </div>
  );
}

export default Home;
