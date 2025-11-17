export default function ResultTable({ data, type, emptyMessage }) {

  const styles = {
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      backgroundColor: "white",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    },

    th: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "12px",
      textAlign: "left",
      fontWeight: "600",
      fontSize: "14px",
    },

    td: {
      padding: "10px",
      borderBottom: "1px solid #e5e5e5",
      fontSize: "14px",
    },

    messageBox: {
      marginTop: "20px",
      padding: "15px",
      backgroundColor: "#fff3cd",
      borderLeft: "5px solid #ffca2c",
      borderRadius: "5px",
      color: "#856404",
      fontWeight: "500",
    },
  };

  if (!data || data.length === 0) {
    return <div style={styles.messageBox}>{emptyMessage}</div>;
  }

  if (data.length === 1 && data[0].testatus === -1) {
    return <div style={styles.messageBox}>{data[0].tmensaje}</div>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {type === "empleado" ? (
            <>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Nombre</th>
              <th style={styles.th}>A. Paterno</th>
              <th style={styles.th}>A. Materno</th>
              <th style={styles.th}>Dirección</th>
              <th style={styles.th}>CP</th>
              <th style={styles.th}>Teléfono</th>
              <th style={styles.th}>CURP</th>
              <th style={styles.th}>NSS</th>
              <th style={styles.th}>Puesto</th>
              <th style={styles.th}>Estatus</th>
              <th style={styles.th}>Mensaje</th>
            </>
          ) : (
            <>
              <th style={styles.th}>ID Puesto</th>
              <th style={styles.th}>Descripción</th>
              <th style={styles.th}>Estatus</th>
              <th style={styles.th}>Mensaje</th>
            </>
          )}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {type === "empleado" ? (
              <>
                <td style={styles.td}>{item.tnumempleado}</td>
                <td style={styles.td}>{item.tnombre}</td>
                <td style={styles.td}>{item.tappaterno}</td>
                <td style={styles.td}>{item.tapmaterno}</td>
                <td style={styles.td}>{item.tdireccion}</td>
                <td style={styles.td}>{item.tcodigopostal}</td>
                <td style={styles.td}>{item.ttelefono}</td>
                <td style={styles.td}>{item.tcurp}</td>
                <td style={styles.td}>{item.tnss}</td>
                <td style={styles.td}>{item.tdescripcionpuesto}</td>
                <td style={styles.td}>{item.testatus}</td>
                <td style={styles.td}>{item.tmensaje}</td>
              </>
            ) : (
              <>
                <td style={styles.td}>{item.tidpuesto}</td>
                <td style={styles.td}>{item.tdescripcion}</td>
                <td style={styles.td}>{item.testatus}</td>
                <td style={styles.td}>{item.tmensaje}</td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
