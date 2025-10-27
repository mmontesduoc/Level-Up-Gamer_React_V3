import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Helper para renderizar con Router
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Navbar Component', () => {
  describe('Renderizado', () => {
    it('debe renderizar sin errores', () => {
      const { container } = renderWithRouter(<Navbar />);
      expect(container).toBeTruthy();
    });

    it('debe renderizar el logo', () => {
      renderWithRouter(<Navbar />);
      const logo = document.querySelector('.logo-brand');
      expect(logo).toBeTruthy();
      expect(logo.getAttribute('alt')).toBe('Level UP Gamer');
    });

    it('debe renderizar el navbar de Bootstrap', () => {
      renderWithRouter(<Navbar />);
      const navbar = document.querySelector('.navbar');
      expect(navbar).toBeTruthy();
      expect(navbar.classList.contains('navbar-expand-lg')).toBe(true);
    });
  });

  describe('Links de Navegación', () => {
    it('debe renderizar todos los links principales', () => {
      renderWithRouter(<Navbar />);

      expect(screen.getByText('Home')).toBeTruthy();
      expect(screen.getByText('Nintendo')).toBeTruthy();
      expect(screen.getByText('Playstation')).toBeTruthy();
      expect(screen.getByText('PC')).toBeTruthy();
      expect(screen.getByText('Tienda')).toBeTruthy();
      expect(screen.getByText('Contacto')).toBeTruthy();
    });

    it('debe tener link a Home con ruta correcta', () => {
      renderWithRouter(<Navbar />);
      const homeLink = screen.getByText('Home').closest('a');
      expect(homeLink.getAttribute('href')).toBe('/');
    });

    it('debe tener link a Nintendo con ruta correcta', () => {
      renderWithRouter(<Navbar />);
      const nintendoLink = screen.getByText('Nintendo').closest('a');
      expect(nintendoLink.getAttribute('href')).toBe('/nintendo');
    });

    it('debe tener link a PlayStation con ruta correcta', () => {
      renderWithRouter(<Navbar />);
      const playstationLink = screen.getByText('Playstation').closest('a');
      expect(playstationLink.getAttribute('href')).toBe('/play-station');
    });

    it('debe tener link a PC con ruta correcta', () => {
      renderWithRouter(<Navbar />);
      const pcLink = screen.getByText('PC').closest('a');
      expect(pcLink.getAttribute('href')).toBe('/pc');
    });

    it('debe tener link a Tienda con ruta correcta', () => {
      renderWithRouter(<Navbar />);
      const tiendaLink = screen.getByText('Tienda').closest('a');
      expect(tiendaLink.getAttribute('href')).toBe('/tienda');
    });

    it('debe tener link a Contacto con ruta correcta', () => {
      renderWithRouter(<Navbar />);
      const contactoLink = screen.getByText('Contacto').closest('a');
      expect(contactoLink.getAttribute('href')).toBe('/contacto');
    });
  });

  describe('Funcionalidades Adicionales', () => {
    it('debe renderizar el botón de login', () => {
      renderWithRouter(<Navbar />);
      expect(screen.getByText('Iniciar Sesion')).toBeTruthy();
    });

    it('debe renderizar el ícono del carrito', () => {
      renderWithRouter(<Navbar />);
      const cartIcon = document.querySelector('.fa-shopping-cart');
      expect(cartIcon).toBeTruthy();
    });

    it('debe mostrar el contador del carrito', () => {
      renderWithRouter(<Navbar />);
      const cartCount = document.querySelector('.cart-count');
      expect(cartCount).toBeTruthy();
      expect(cartCount.textContent).toBe('0');
    });

    it('debe tener botón de toggle para móviles', () => {
      renderWithRouter(<Navbar />);
      const toggleButton = document.querySelector('.navbar-toggler');
      expect(toggleButton).toBeTruthy();
    });
  });

  describe('Estructura HTML', () => {
    it('debe tener la estructura correcta de Bootstrap navbar', () => {
      renderWithRouter(<Navbar />);

      const navbar = document.querySelector('.navbar');
      const container = navbar.querySelector('.container-fluid');
      const collapse = container.querySelector('.navbar-collapse');
      const navList = collapse.querySelector('.navbar-nav');

      expect(navbar).toBeTruthy();
      expect(container).toBeTruthy();
      expect(collapse).toBeTruthy();
      expect(navList).toBeTruthy();
    });

    it('debe tener 6 elementos nav-item en la lista', () => {
      renderWithRouter(<Navbar />);
      const navItems = document.querySelectorAll('.nav-item');
      expect(navItems.length).toBe(6);
    });
  });
});
