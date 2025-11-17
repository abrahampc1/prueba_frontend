import React from "react";

export default function ModalAlert({ open, onClose, title, message }) {
  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.message}>{message}</p>

        <button style={styles.button} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modal: {
    backgroundColor: "#fff",
    width: "350px",
    padding: "25px",
    borderRadius: "10px",
    textAlign: "center",
    animation: "fadeIn 0.3s ease",
  },
  title: {
    marginBottom: "10px"
  },
  message: {
    marginBottom: "20px",
    whiteSpace: "pre-line",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  }
};
