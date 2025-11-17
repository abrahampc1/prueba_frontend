import { useState } from "react";
import EmpleadoPresenter from "../../presenters/EmpleadoPresenter";
import LoadingComponent from "../../components/LoadingComponent";
import ResultTable from "../../components/ResultTable";
import { Styles } from "./Styles";

export default function EmpleadoScreen() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [respuesta, setRespuesta] = useState(null);
  const [loading, setLoading] = useState(false);

  let startTime = 0;

  const presenter = new EmpleadoPresenter({
    mostrarRespuesta: async (data) => {
      const elapsed = Date.now() - startTime;
      const MINIMUM = 1000;
      const remaining = MINIMUM - elapsed;

      if (remaining > 0) {
        await new Promise((res) => setTimeout(res, remaining));
      }

      setRespuesta(data.data);
      setLoading(false);
    },
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const limpiarErroresDeOtrosCampos = (camposNecesarios) => {
    let nuevos = { ...errors };
    Object.keys(nuevos).forEach((campo) => {
      if (!camposNecesarios.includes(campo)) {
        nuevos[campo] = "";
      }
    });
    setErrors(nuevos);
  };

  const validarCampos = (campos) => {
    let newErrors = {};
    let valido = true;

    campos.forEach((campo) => {
      if (!form[campo] || form[campo].toString().trim() === "") {
        newErrors[campo] = "Este campo es obligatorio";
        valido = false;
      }
    });

    setErrors(newErrors);
    return valido;
  };

  const ejecutarConLoading = (fn) => {
    startTime = Date.now();
    setRespuesta(null);
    setLoading(true);
    fn();
  };

  const ejecutarAlta = () => {
    const campos = [
      "iNumEmpleado",
      "sNombre",
      "sApPaterno",
      "sApMaterno",
      "sDireccion",
      "sCodigoPostal",
      "sTelefono",
      "sCurp",
      "sNss",
      "iPuesto",
    ];

    limpiarErroresDeOtrosCampos(campos);
    if (!validarCampos(campos)) return;

    ejecutarConLoading(() => presenter.altaEmpleado(form));
  };

  const ejecutarModificar = () => {
    const campos = [
      "iNumEmpleado",
      "sDireccion",
      "sCodigoPostal",
      "sTelefono",
      "sCurp",
      "sNss",
      "iPuesto",
    ];

    limpiarErroresDeOtrosCampos(campos);

    if (!validarCampos(campos)) return;

    ejecutarConLoading(() => presenter.modificarEmpleado(form));
  };

  const ejecutarBaja = () => {
    const campos = ["iNumEmpleado", "sCausaBaja"];

    limpiarErroresDeOtrosCampos(campos);

    if (!validarCampos(campos)) return;

    ejecutarConLoading(() => presenter.bajaEmpleado(form));
  };

  const ejecutarConsulta = () => {
    const campos = ["iNumEmpleado"];

    limpiarErroresDeOtrosCampos(campos);

    if (!validarCampos(campos)) return;

    ejecutarConLoading(() =>
      presenter.consultar({
        ...form,
        iNumEmpleado: Number(form.iNumEmpleado),
      })
    );
  };

  const ejecutarConsultaTodos = () => {
    setErrors({});
    ejecutarConLoading(() =>
      presenter.consultar({
        ...form,
        iNumEmpleado: 0,
      })
    );
  };

  const renderInput = (name, placeholder) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        style={{
          ...Styles.input,
          border: errors[name] ? "1px solid red" : Styles.input.border,
        }}
        name={name}
        placeholder={placeholder}
        onChange={handle}
      />

      {errors[name] && (
        <span style={{ color: "red", fontSize: "12px", marginTop: "3px" }}>
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <div style={Styles.screen}>
      <h2 style={Styles.title}>👤 Gestión de Empleados</h2>

      <div style={Styles.inputGroup}>
        {renderInput("iNumEmpleado", "Número de Empleado")}
        {renderInput("sNombre", "Nombre")}
        {renderInput("sApPaterno", "Apellido Paterno")}
        {renderInput("sApMaterno", "Apellido Materno")}
        {renderInput("sDireccion", "Dirección")}
        {renderInput("sCodigoPostal", "Código Postal")}
        {renderInput("sTelefono", "Teléfono")}
        {renderInput("sCurp", "CURP")}
        {renderInput("sNss", "NSS")}
        {renderInput("iPuesto", "ID Puesto")}
        {renderInput("sCausaBaja", "Causa de Baja")}
      </div>

      <div style={Styles.buttonGroup}>
        <button
          style={{ ...Styles.button, ...Styles.altaButton }}
          onClick={ejecutarAlta}
        >
          ➕ ALTA
        </button>

        <button
          style={{ ...Styles.button, ...Styles.modificarButton }}
          onClick={ejecutarModificar}
        >
          ✏️ MODIFICAR
        </button>

        <button
          style={{ ...Styles.button, ...Styles.bajaButton }}
          onClick={ejecutarBaja}
        >
          🗑️ BAJA
        </button>

        <button
          style={{ ...Styles.button, ...Styles.consultarButton }}
          onClick={ejecutarConsulta}
        >
          🔍 CONSULTAR
        </button>

        <button
          style={{ ...Styles.button, ...Styles.consultarButton }}
          onClick={ejecutarConsultaTodos}
        >
          📋 CONSULTAR TODOS
        </button>
      </div>

      <div style={{ marginTop: "30px", minHeight: "200px" }}>
        {loading && <LoadingComponent />}

        {!loading && respuesta && (
          <ResultTable
            data={respuesta}
            type="empleado"
            emptyMessage="No se encontraron resultados"
          />
        )}
      </div>
    </div>
  );
}
