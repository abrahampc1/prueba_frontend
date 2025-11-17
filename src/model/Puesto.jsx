import { PuestoDataSource } from "../data/PuestoDataSource";

class Puesto {
  async ejecutarOperacion(body) {
    return await PuestoDataSource.ejecutar(body);
  }
}

export default new Puesto();