const API_URL = "http://localhost:8446";

export const LoginDataSource = {
  ejecutar: async (body) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return res.json();
  },
};
