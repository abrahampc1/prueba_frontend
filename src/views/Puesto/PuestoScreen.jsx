import { useState, useEffect } from "react";
import PuestoPresenter from "../../presenters/PuestoPresenter";
import LoadingComponent from "../../components/LoadingComponent";
import ResultTable from "../../components/ResultTable";
import { Styles } from "./Styles";

export default function PuestoScreen() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [respuesta, setRespuesta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [empleadoLogueado, setEmpleadoLogueado] = useState(null);

  let startTime = 0;

  useEffect(() => {
    const emp = JSON.parse(localStorage.getItem("empleado"));
    if (emp) setEmpleadoLogueado(emp.id_empleado); 
  }, []);

  const presenter = new PuestoPresenter({
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
      if (!camposNecesarios.includes(campo)) nuevos[campo] = "";
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
    const campos = ["iIdPuesto", "iDescripcion"];
    limpiarErroresDeOtrosCampos(campos);

    if (!validarCampos(campos)) return;

    ejecutarConLoading(() =>
      presenter.alta({
        ...form,
        iEmpleadoRegistra: empleadoLogueado, 
      })
    );
  };

  const ejecutarModificar = () => {
    const campos = ["iIdPuesto", "iDescripcion"];
    limpiarErroresDeOtrosCampos(campos);

    if (!validarCampos(campos)) return;

    ejecutarConLoading(() => presenter.modificar(form));
  };

  const ejecutarBaja = () => {
    const campos = ["iIdPuesto"];
    limpiarErroresDeOtrosCampos(campos);

    if (!validarCampos(campos)) return;

    ejecutarConLoading(() =>
      presenter.baja({
        ...form,
        iEmpleadoBaja: empleadoLogueado,
      })
    );
  };

  const ejecutarConsulta = () => {
    const campos = ["iIdPuesto"];
    limpiarErroresDeOtrosCampos(campos);

    if (!validarCampos(campos)) return;

    ejecutarConLoading(() =>
      presenter.consultar({
        ...form,
        iIdPuesto: Number(form.iIdPuesto),
      })
    );
  };

  const ejecutarConsultaTodos = () => {
    setErrors({});
    ejecutarConLoading(() =>
      presenter.consultar({
        ...form,
        iIdPuesto: -1,
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
      <h2 style={Styles.title}>🏢 Catálogo de Puestos</h2>

      <div style={Styles.inputGroup}>
        {renderInput("iIdPuesto", "ID Puesto")}
        {renderInput("iDescripcion", "Descripción del Puesto")}
      </div>

      <div style={Styles.buttonGroup}>
        <button style={{ ...Styles.button, ...Styles.altaButton }} onClick={ejecutarAlta}>
          ➕ ALTA
        </button>

        <button style={{ ...Styles.button, ...Styles.modificarButton }} onClick={ejecutarModificar}>
          ✏️ MODIFICAR
        </button>

        <button style={{ ...Styles.button, ...Styles.bajaButton }} onClick={ejecutarBaja}>
          🗑️ BAJA
        </button>

        <button style={{ ...Styles.button, ...Styles.consultarButton }} onClick={ejecutarConsulta}>
          🔍 CONSULTAR
        </button>

        <button style={{ ...Styles.button, ...Styles.consultarButton }} onClick={ejecutarConsultaTodos}>
          📋 CONSULTAR TODOS
        </button>
      </div>

      <div style={{ marginTop: "30px", minHeight: "200px" }}>
        {loading && <LoadingComponent />}
        {!loading && respuesta && (
          <ResultTable
            data={respuesta}
            type="puesto"
            emptyMessage="No se encontraron resultados"
          />
        )}
      </div>
    </div>
  );
}
