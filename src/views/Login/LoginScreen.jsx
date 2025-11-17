import { useState, useRef } from "react";
import LoginPresenter from "../../presenters/LoginPresenter";
import { Styles } from "./Style"; 

export default function LoginScreen({ onLogin }) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState({ usuario: false, password: false });
  
  const usuarioRef = useRef(null); 
  const passwordRef = useRef(null);

  const presenter = new LoginPresenter({
    mostrarCarga: setLoading,
    mostrarMensaje: setMensaje,
    onLoginExitoso: () => onLogin(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateAndFocus = () => {
    let newErrors = {};
    let ok = true;
    let focusRef = null;

    if (!form.usuario) {
      newErrors.usuario = "El usuario es obligatorio.";
      ok = false;
      focusRef = usuarioRef;
    }
    if (!form.password) {
      newErrors.password = "La contraseña es obligatoria.";
      ok = false;
      if (!focusRef) {
        focusRef = passwordRef;
      }
    }

    setErrors(newErrors);

    if (!ok && focusRef && focusRef.current) {
      focusRef.current.focus();
    }
    return ok;
  };

  const submitLogin = () => {
    if (!validateAndFocus()) return;
    presenter.iniciarSesion(form.usuario, form.password);
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !loading) {
      submitLogin();
    }
  };

  // Estilos condicionales que aplican el borde de error y el foco
  const getInputStyle = (name) => ({
    ...Styles.input,
    border: errors[name] ? `2px solid ${Styles.errorText.color}` : Styles.input.border, 
    ...(focus[name] && Styles.inputFocus),
  });

  return (
    <div style={Styles.container}>
      <div style={Styles.formCard}>
        <h2 style={Styles.title}>INICIAR SESION</h2>

        <div style={Styles.inputContainer}>
          <label htmlFor="usuario-input" style={Styles.label}>Usuario</label>
          <input
            id="usuario-input"
            ref={usuarioRef}
            name="usuario"
            placeholder="Tu nombre de usuario"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setFocus({ ...focus, usuario: true })}
            onBlur={() => setFocus({ ...focus, usuario: false })}
            style={getInputStyle('usuario')}
            aria-invalid={!!errors.usuario}
          />
          {errors.usuario && (
            <span style={Styles.errorText} role="alert">{errors.usuario}</span>
          )}
        </div>

        <div style={Styles.inputContainer}>
          <label htmlFor="password-input" style={Styles.label}>Contraseña</label>
          <input
            id="password-input"
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setFocus({ ...focus, password: true })}
            onBlur={() => setFocus({ ...focus, password: false })}
            style={getInputStyle('password')}
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <span style={Styles.errorText} role="alert">{errors.password}</span>
          )}
        </div>

        <button
          onClick={submitLogin}
          disabled={loading}
          style={{
            ...Styles.button,
            ...(loading ? Styles.buttonDisabled : Styles.buttonHover),
          }}
          aria-live="polite"
        >
          {loading ? (
            <>
              <span className="spinner" style={{ marginRight: '10px', display: 'inline-block' }}>🔄</span> 
              Autenticando...
            </>
          ) : (
            "Iniciar Sesión"
          )}
        </button>

        {mensaje && <p style={Styles.message}>{mensaje}</p>}
      </div>
    </div>
  );
}