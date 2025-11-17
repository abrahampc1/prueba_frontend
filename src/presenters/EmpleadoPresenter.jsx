import Empleado from "../model/Empleado";

class EmpleadoPresenter {
  constructor(view) {
    this.view = view;
  }

  async altaEmpleado(data) {
    const body = { iOpcion: 1, ...data };
    const res = await Empleado.ejecutarOperacion(body);
    this.view.mostrarRespuesta(res);
  }

  async modificarEmpleado(data) {
    const body = { iOpcion: 2, ...data };
    const res = await Empleado.ejecutarOperacion(body);
    this.view.mostrarRespuesta(res);
  }

  async bajaEmpleado(data) {
    const body = { iOpcion: 3, ...data };
    const res = await Empleado.ejecutarOperacion(body);
    this.view.mostrarRespuesta(res);
  }

  async consultar(data) {
    const body = { iOpcion: 4, ...data };
    const res = await Empleado.ejecutarOperacion(body);
    this.view.mostrarRespuesta(res);
  }
}

export default EmpleadoPresenter;
