import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";
import logo from "../images/logo2.png";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
    fechaNacimiento: "",
    password: "",
    confirmPassword: "",
    aceptaTerminos: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registroMessage, setRegistroMessage] = useState(null);
  const [edad, setEdad] = useState(null);
  const [isDuocEmail, setIsDuocEmail] = useState(false);

  // Calcular edad a partir de la fecha de nacimiento
  const calcularEdad = (fechaNacimiento) => {
    if (!fechaNacimiento) return null;

    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }

    return edad;
  };

  // Verificar si el email es de Duoc
  const verificarEmailDuoc = (email) => {
    return email.toLowerCase().endsWith("@duocuc.cl");
  };

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }

    // Calcular edad si es el campo de fecha de nacimiento
    if (name === "fechaNacimiento") {
      const edadCalculada = calcularEdad(value);
      setEdad(edadCalculada);
    }

    // Verificar si es email de Duoc
    if (name === "email") {
      setIsDuocEmail(verificarEmailDuoc(value));
    }
  };

  // Validar formulario completo
  const validateForm = () => {
    const newErrors = {};

    // Validar nombre completo
    if (!formData.nombreCompleto.trim()) {
      newErrors.nombreCompleto = "El nombre completo es requerido";
    } else if (formData.nombreCompleto.trim().length < 3) {
      newErrors.nombreCompleto = "El nombre debe tener al menos 3 caracteres";
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
    }

    // Validar fecha de nacimiento
    if (!formData.fechaNacimiento) {
      newErrors.fechaNacimiento = "La fecha de nacimiento es requerida";
    } else {
      const edadCalculada = calcularEdad(formData.fechaNacimiento);
      if (edadCalculada < 18) {
        newErrors.fechaNacimiento =
          "Debes ser mayor de 18 años para registrarte";
      } else if (edadCalculada > 120) {
        newErrors.fechaNacimiento = "Ingresa una fecha de nacimiento válida";
      }
    }

    // Validar contraseña
    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Debe contener mayúsculas, minúsculas y números";
    }

    // Validar confirmación de contraseña
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirma tu contraseña";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    // Validar términos y condiciones
    if (!formData.aceptaTerminos) {
      newErrors.aceptaTerminos = "Debes aceptar los términos y condiciones";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistroMessage(null);

    if (!validateForm()) {
      setRegistroMessage({
        type: "error",
        text: "Por favor, corrige los errores en el formulario",
      });
      return;
    }

    setIsLoading(true);

    // Simulación de registro (aquí irá la lógica real)
    setTimeout(() => {
      const descuento = isDuocEmail ? 20 : 0;
      console.log("Registro exitoso:", {
        ...formData,
        edad,
        descuento,
      });

      setRegistroMessage({
        type: "success",
        text: isDuocEmail
          ? "¡Registro exitoso! Has obtenido un 20% de descuento permanente."
          : "¡Registro exitoso! Redirigiendo...",
      });
      setIsLoading(false);

      // Aquí podrías redirigir al usuario
      // navigate('/inicio-sesion');
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <img src={logo} alt="Level UP Gamer" className="auth-logo" />
          <h1>
            <i className="fas fa-user-plus"></i> Crear Cuenta
          </h1>
          <p>Únete a la comunidad de Level UP Gamer</p>
        </div>

        {/* Body */}
        <div className="auth-body">
          {/* Info box para usuarios de Duoc */}
          <div className="info-box">
            <i className="fas fa-gift"></i>
            <strong>¡Beneficio especial!</strong> Los usuarios con correo de
            Duoc (@duocuc.cl) obtienen un{" "}
            <strong>20% de descuento permanente</strong> en todas sus compras.
          </div>

          {/* Mensaje de éxito/error */}
          {registroMessage && (
            <div
              className={`alert-auth ${
                registroMessage.type === "success"
                  ? "alert-success"
                  : "alert-error"
              }`}
            >
              <i
                className={`fas ${
                  registroMessage.type === "success"
                    ? "fa-check-circle"
                    : "fa-exclamation-circle"
                }`}
              ></i>
              {registroMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {/* Nombre completo */}
            <div className="form-group-auth">
              <label htmlFor="nombreCompleto">
                Nombre Completo <span className="required-star">*</span>
              </label>
              <input
                type="text"
                id="nombreCompleto"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                className={errors.nombreCompleto ? "input-error" : ""}
                placeholder="Ingresa tu nombre completo"
              />
              {errors.nombreCompleto && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.nombreCompleto}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="form-group-auth">
              <label htmlFor="email">
                Correo Electrónico <span className="required-star">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={
                  errors.email
                    ? "input-error"
                    : isDuocEmail
                    ? "input-success"
                    : ""
                }
                placeholder="ejemplo@correo.com"
              />
              {errors.email && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.email}
                </div>
              )}
              {isDuocEmail && !errors.email && (
                <div className="duoc-badge">
                  <i className="fas fa-star"></i>
                  ¡20% de descuento permanente activado!
                </div>
              )}
            </div>

            {/* Fecha de nacimiento */}
            <div className="form-group-auth">
              <label htmlFor="fechaNacimiento">
                Fecha de Nacimiento <span className="required-star">*</span>
              </label>
              <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                className={
                  errors.fechaNacimiento
                    ? "input-error"
                    : edad >= 18
                    ? "input-success"
                    : ""
                }
                max={new Date().toISOString().split("T")[0]}
              />
              {errors.fechaNacimiento && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.fechaNacimiento}
                </div>
              )}
              {edad !== null && !errors.fechaNacimiento && (
                <div
                  className={`age-info ${
                    edad >= 18 ? "age-valid" : "age-invalid"
                  }`}
                >
                  <i
                    className={`fas ${
                      edad >= 18 ? "fa-check-circle" : "fa-times-circle"
                    }`}
                  ></i>
                  {edad >= 18
                    ? `Tienes ${edad} años - Registro permitido`
                    : `Tienes ${edad} años - Debes ser mayor de 18`}
                </div>
              )}
            </div>

            {/* Contraseña */}
            <div className="form-group-auth">
              <label htmlFor="password">
                Contraseña <span className="required-star">*</span>
              </label>
              <div className="password-toggle">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "input-error" : ""}
                  placeholder="Crea una contraseña segura"
                />
                <i
                  className={`password-toggle-icon fas ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              {errors.password && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.password}
                </div>
              )}
              <div className="password-requirements">
                <small>La contraseña debe contener:</small>
                <ul>
                  <li>Mínimo 8 caracteres</li>
                  <li>Al menos una letra mayúscula</li>
                  <li>Al menos una letra minúscula</li>
                  <li>Al menos un número</li>
                </ul>
              </div>
            </div>

            {/* Confirmar contraseña */}
            <div className="form-group-auth">
              <label htmlFor="confirmPassword">
                Confirmar Contraseña <span className="required-star">*</span>
              </label>
              <div className="password-toggle">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={
                    errors.confirmPassword
                      ? "input-error"
                      : formData.confirmPassword &&
                        formData.password === formData.confirmPassword
                      ? "input-success"
                      : ""
                  }
                  placeholder="Confirma tu contraseña"
                />
                <i
                  className={`password-toggle-icon fas ${
                    showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              </div>
              {errors.confirmPassword && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.confirmPassword}
                </div>
              )}
              {!errors.confirmPassword &&
                formData.confirmPassword &&
                formData.password === formData.confirmPassword && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    Las contraseñas coinciden
                  </div>
                )}
            </div>

            {/* Términos y condiciones */}
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="aceptaTerminos"
                name="aceptaTerminos"
                checked={formData.aceptaTerminos}
                onChange={handleChange}
              />
              <label htmlFor="aceptaTerminos">
                Acepto los <a href="#">términos y condiciones</a> y la{" "}
                <a href="#">política de privacidad</a>
              </label>
            </div>
            {errors.aceptaTerminos && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                {errors.aceptaTerminos}
              </div>
            )}

            {/* Botón de registro */}
            <button
              type="submit"
              className={`btn-auth ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "" : "Crear Cuenta"}
            </button>

            {/* Link a login */}
            <div className="auth-link">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/inicio-sesion">Inicia sesión aquí</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
