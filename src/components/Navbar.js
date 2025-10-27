import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Level UP Gamer"
            className="logo-brand d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nintendo">
                Nintendo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/play-station">
                Playstation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pc">
                PC
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tienda">
                Tienda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>

          <div className="cart-login">
            <Link className="nav-link" to="/inicio-sesion">
              <span className="inicio-sesion">Iniciar Sesion</span>
              <i className="fa-solid fa-user"></i>
            </Link>
          </div>

          <div className="cart-icon">
            <Link to="/carro-compras">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">0</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
