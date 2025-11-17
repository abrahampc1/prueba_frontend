import Login from "../model/Login";

export default class LoginPresenter {
  constructor(view) {
    this.view = view;
    this.model = Login;
  }

  async iniciarSesion(usuario, password) {
    this.view.mostrarCarga(true);

    const resp = await this.model.login(usuario, password);

    this.view.mostrarCarga(false);

    if (resp.estatus === 1) {
      localStorage.setItem("empleado", JSON.stringify(resp.data));
      this.view.onLoginExitoso();
    } else {
      this.view.mostrarMensaje(resp.mensaje);
    }
  }
}
