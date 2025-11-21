import React from "react";

const PageHeader = ({
  title,
  subtitle,
  icon = "fa-gamepad",
  gradient = "linear-gradient(135deg, #E60012, #0066CC)"
}) => {
  return (
    <div
      className="container-fluid-banner text-center text-white py-5"
      style={{
        background: gradient,
        marginBottom: "50px",
      }}
    >
      <h1 className="display-3 fw-bold">
        <i className={`fas ${icon}`}></i> {title}
      </h1>
      <p className="lead">{subtitle}</p>
    </div>
  );
};

export default PageHeader;
