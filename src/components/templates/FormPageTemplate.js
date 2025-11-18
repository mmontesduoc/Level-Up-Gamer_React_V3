import React from "react";

/**
 * Template para páginas con formularios (Login, Registro, etc.)
 *
 * Este template define la estructura común de páginas de autenticación:
 * - Contenedor centrado
 * - Título
 * - Formulario
 * - Links adicionales (opcional)
 *
 * @param {Object} props
 * @param {string} props.title - Título del formulario
 * @param {React.ReactNode} props.children - El formulario en sí
 * @param {React.ReactNode} props.footer - Links o texto adicional (ej: "¿Ya tienes cuenta?")
 */
const FormPageTemplate = ({ title, children, footer }) => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">{title}</h2>

              {/* El formulario real va aquí */}
              {children}

              {/* Links adicionales (ej: "¿Olvidaste tu contraseña?") */}
              {footer && (
                <div className="mt-3 text-center">
                  {footer}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPageTemplate;
