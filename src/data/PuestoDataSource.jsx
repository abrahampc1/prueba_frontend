const API_URL = "http://localhost:8446";

export const PuestoDataSource = {
  ejecutar: async (body) => {
    const res = await fetch(`${API_URL}/puestos/opciones`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res.json();
  },
};
