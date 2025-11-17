export const Styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f7f6",
    padding: "20px",
  },

  formCard: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    maxWidth: "380px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#333333",
    marginBottom: "5px",
  },
  
  label: {
      alignSelf: 'flex-start',
      marginBottom: '5px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#555',
  },

  inputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  input: {
    padding: "12px 15px",
    width: "100%",
    border: "1px solid #dcdcdc",
    borderRadius: "8px",
    fontSize: "16px",
    transition: "border-color 0.3s, box-shadow 0.3s",
    boxSizing: "border-box",
  },
  
  inputFocus: {
      borderColor: '#4A90E2',
      boxShadow: '0 0 0 3px rgba(74, 144, 226, 0.2)',
  },

  errorText: {
    color: "#D9534F",
    fontSize: "13px",
    marginTop: "5px",
    fontWeight: "500",
  },

  button: {
    padding: "14px 25px",
    width: "100%",
    backgroundColor: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "10px",
    boxShadow: "0 4px 10px rgba(74, 144, 226, 0.3)",
    transition: "background-color 0.3s, box-shadow 0.3s",
  },
  
  buttonHover: {
      backgroundColor: '#357ABD',
      boxShadow: "0 6px 15px rgba(74, 144, 226, 0.4)",
  },

  buttonDisabled: {
    backgroundColor: "#99bce6",
    cursor: "not-allowed",
    boxShadow: "none",
  },

  message: {
    color: "#D9534F",
    marginTop: "15px",
    fontSize: "15px",
    fontWeight: "500",
  }
};