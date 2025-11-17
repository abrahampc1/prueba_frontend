import Puesto from "../model/Puesto";

class PuestoPresenter {
  constructor(view) {
    this.view = view;
  }

  async alta(data) {
    const body = { iOpcion: 1, ...data };
    const res = await Puesto.ejecutarOperacion(body);
    this.view.mostrarRespuesta(res);
  }

  async modificar(data) {
    const body = { iOpcion: 2, ...data };
    const res = await Puesto.ejecutarOperacion(body);
    this.view.mostrarRespuesta(res);
  }

  async baja(data) {
    const body = { iOpcion: 3, ...data };
    const res = await Puesto.ejecutarOperacion(body);
    this.view.mostrarRespuesta(res);
  }

  async consultar(data) {
    const body = { iOpcion: 4, ...data };
    const res = await Puesto.ejecutarOperacion(body);
    this.view.mostrarRespuesta(res);
  }
}

export default PuestoPresenter;
