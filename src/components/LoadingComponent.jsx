export default function LoadingComponent() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "60vh",
      flexDirection: "column",
      gap: "20px",
    },
    spinner: {
      width: "60px",
      height: "60px",
      border: "6px solid #e0e0e0",
      borderTop: "6px solid #007bff",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    text: {
      fontSize: "20px",
      color: "#007bff",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Cargando...</p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
