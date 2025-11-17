import { useState, useEffect } from "react";
import LoginScreen from "./views/Login/LoginScreen";
import HomeScreen from "./views/Home/HomeScreen";
import EmpleadoScreen from "./views/Empleado/EmpleadoScreen";
import PuestoScreen from "./views/Puesto/PuestoScreen";
import Navbar from "./components/NavBar";
import LoadingOverlay from "./components/LoadingOverlay";

export default function App() {
  const [pantalla, setPantalla] = useState("login");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const empleado = localStorage.getItem("empleado");
    if (empleado) setPantalla("inicio");
  }, []);

  const cambiarPantalla = (destino) => {
    setLoading(true);
    setTimeout(() => {
      setPantalla(destino);
      setLoading(false);
    }, 800);
  };

  const onLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setPantalla("inicio");
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      {loading && <LoadingOverlay />}

      {pantalla === "login" ? (
        <LoginScreen onLogin={onLogin} />
      ) : (
        <>
          <Navbar cambiarPantalla={cambiarPantalla} />

          {pantalla === "inicio" ? (
            <HomeScreen />
          ) : pantalla === "empleados" ? (
            <EmpleadoScreen />
          ) : (
            <PuestoScreen />
          )}
        </>
      )}
    </div>
  );
}
