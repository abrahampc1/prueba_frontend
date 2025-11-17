import { LoginDataSource } from "../data/LoginDataSourtce";

class Login {
  async login(usuario, password) {
    return await LoginDataSource.ejecutar({ usuario, password });
  }
}

export default new Login();
