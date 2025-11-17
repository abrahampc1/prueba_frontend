export default function Navbar({ cambiarPantalla }) {
  const styles = {
    navbar: {
      backgroundColor: "#007bff",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    navButtons: {
      display: "flex",
      gap: "20px",
    },
    navButton: {
      background: "white",
      color: "#007bff",
      padding: "10px 18px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      transition: "0.3s",
    },
  };

  return (
    <nav style={styles.navbar}>
      <h2>Sistema ABC</h2>

      <div style={styles.navButtons}>
        <button style={styles.navButton} onClick={() => cambiarPantalla("inicio")}>
          🏠 Inicio
        </button>
        <button style={styles.navButton} onClick={() => cambiarPantalla("empleados")}>
          👤 Empleados
        </button>
        <button style={styles.navButton} onClick={() => cambiarPantalla("puestos")}>
          🏢 Puestos
        </button>

        <button
          style={{ ...styles.navButton, background: "#ff4d4d", color: "white" }}
          onClick={() => {
            localStorage.removeItem("empleado");
            window.location.reload();
          }}
        >
          🔒 Cerrar Sesión
        </button>
      </div>
    </nav>
  );
}
