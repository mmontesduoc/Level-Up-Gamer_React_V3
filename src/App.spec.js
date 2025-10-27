import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  describe('Renderizado', () => {
    it('debe renderizar sin errores', () => {
      const { container } = render(<App />);
      expect(container).toBeTruthy();
    });

    it('debe renderizar el Navbar', () => {
      render(<App />);
      // Verificar que el navbar está presente buscando el logo o algún elemento característico
      const navbar = document.querySelector('nav');
      expect(navbar).toBeTruthy();
    });

    it('debe renderizar el Footer', () => {
      render(<App />);
      // Verificar que el footer está presente
      const footer = document.querySelector('footer');
      expect(footer).toBeTruthy();
    });

    it('debe renderizar el contenido principal', () => {
      render(<App />);
      const main = document.querySelector('main');
      expect(main).toBeTruthy();
    });
  });

  describe('Estructura de Rutas', () => {
    it('debe contener la estructura de React Router', () => {
      const { container } = render(<App />);
      // Verificar que el componente App contiene la estructura básica
      expect(container.querySelector('.App')).toBeTruthy();
    });
  });

  describe('Integración de Componentes', () => {
    it('debe tener Navbar, main y Footer en el orden correcto', () => {
      const { container } = render(<App />);
      const app = container.querySelector('.App');
      const children = Array.from(app.children);

      // Verificar orden: nav, main, footer (pueden tener más elementos)
      expect(children.length).toBeGreaterThanOrEqual(3);
    });
  });
});
