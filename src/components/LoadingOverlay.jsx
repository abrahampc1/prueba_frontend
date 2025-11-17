export default function LoadingOverlay() {
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      backdropFilter: "blur(3px)",
    },
    box: {
      backgroundColor: "white",
      padding: "25px 40px",
      borderRadius: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    spinner: {
      width: "30px",
      height: "30px",
      border: "4px solid #ccc",
      borderTop: "4px solid #007bff",
      borderRadius: "50%",
      animation: "spin 0.9s linear infinite",
    },
  };

  return (
    <>
      {/* Inyección del keyframe para animación */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={styles.overlay}>
        <div style={styles.box}>
          <div style={styles.spinner}></div>
          Cargando...
        </div>
      </div>
    </>
  );
}
