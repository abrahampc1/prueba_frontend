export default function HomeScreen() {
  const styles = {
    card: {
      background: "white",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      maxWidth: "700px",
      margin: "50px auto",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: "18px",
      opacity: 0.8,
    },
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.title}>Bienvenido al Sistema ABC</h1>
      <p style={styles.subtitle}>Selecciona una opción del menú para comenzar.</p>
    </div>
  );
}
