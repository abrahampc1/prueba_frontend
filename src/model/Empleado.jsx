import { EmpleadoDataSource } from "../data/EmpleadoDataSource";

class Empleado {
  async ejecutarOperacion(body) {
    return await EmpleadoDataSource.ejecutar(body);
  }
}

export default new Empleado();
