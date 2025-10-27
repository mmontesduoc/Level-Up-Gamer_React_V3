import { fireEvent } from '@testing-library/react';

export class TestHelper {
  /**
   * Simula clicks en múltiples elementos en secuencia
   */
  static simulateClickSequence(component, testIds) {
    const { getByTestId } = component;
    testIds.forEach(testId => {
      fireEvent.click(getByTestId(testId));
    });
  }

  /**
   * Crea un mock del servicio con métodos spy
   */
  static createMockService(methods = []) {
    const mockService = {};
    methods.forEach(method => {
      mockService[method] = jasmine.createSpy(method).and.returnValue(null);
    });
    return mockService;
  }

  /**
   * Helper para esperar a que un elemento aparezca
   */
  static async waitForElement(getByTestId, testId, timeout = 3000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      try {
        const element = getByTestId(testId);
        if (element) return element;
      } catch (e) {
        // Element not found yet
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error(`Element with testId "${testId}" not found within ${timeout}ms`);
  }

  /**
   * Helper para verificar que un texto esté presente en el documento
   */
  static expectTextInDocument(component, text) {
    const { container } = component;
    expect(container.textContent).toContain(text);
  }

  /**
   * Helper para simular cambios en inputs
   */
  static changeInputValue(getByTestId, testId, value) {
    const input = getByTestId(testId);
    fireEvent.change(input, { target: { value } });
  }
}
