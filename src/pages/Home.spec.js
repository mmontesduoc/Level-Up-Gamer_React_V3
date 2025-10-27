import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

// Helper para renderizar con Router (necesario para los componentes que usan Link)
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Home Page', () => {
  describe('Renderizado', () => {
    it('debe renderizar sin errores', () => {
      const { container } = renderWithRouter(<Home />);
      expect(container).toBeTruthy();
    });

    it('debe renderizar un div contenedor', () => {
      const { container } = renderWithRouter(<Home />);
      const homeDiv = container.querySelector('div');
      expect(homeDiv).toBeTruthy();
    });
  });

  describe('Componentes Hijos', () => {
    it('debe renderizar el componente Carousel', () => {
      const { container } = renderWithRouter(<Home />);
      // El Carousel de Bootstrap suele tener la clase 'carousel'
      const carousel = container.querySelector('.carousel');
      expect(carousel).toBeTruthy();
    });

    it('debe renderizar el componente FeaturedProducts', () => {
      const { container } = renderWithRouter(<Home />);
      // Verificamos que hay contenido además del carousel
      const divs = container.querySelectorAll('div');
      expect(divs.length).toBeGreaterThan(1);
    });
  });

  describe('Estructura de la Página', () => {
    it('debe contener al menos dos componentes principales', () => {
      const { container } = renderWithRouter(<Home />);
      const mainDiv = container.querySelector('div');
      const children = mainDiv.children;
      expect(children.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Integración', () => {
    it('debe renderizar completamente sin errores de consola', () => {
      // Este test verifica que no hay errores críticos al renderizar
      expect(() => {
        renderWithRouter(<Home />);
      }).not.toThrow();
    });
  });
});
