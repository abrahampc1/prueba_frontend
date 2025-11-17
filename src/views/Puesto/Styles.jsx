export const Styles = {
  screen: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  title: {
    color: '#007bff',
    borderBottom: '2px solid #e9ecef',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  inputGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '15px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '14px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  },
  altaButton: {
    backgroundColor: '#28a745', // Verde
    color: 'white',
  },
  modificarButton: {
    backgroundColor: '#ffc107', // Amarillo/Naranja
    color: '#333',
  },
  bajaButton: {
    backgroundColor: '#dc3545', // Rojo
    color: 'white',
  },
  consultarButton: {
    backgroundColor: '#007bff', // Azul primario
    color: 'white',
  },
  responseArea: {
    marginTop: '20px',
    backgroundColor: '#e9ecef',
    padding: '15px',
    borderRadius: '4px',
    overflowX: 'auto',
  },
  responseTitle: {
    color: '#333',
  }
};