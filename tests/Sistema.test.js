// Sistema.test.js

const { inicializarSistema, estadoSistema, realizarOperacion } = require('../src/sistema');

describe('Funcionamiento General del Sistema', () => {
  beforeEach(() => {
    inicializarSistema(); // Inicializar el sistema antes de cada prueba
  });

  test('Estado del sistema después de inicializar', () => {
    const estadoInicial = estadoSistema();
    expect(estadoInicial).toBe('Sistema iniciado');
  });

  test('Estado del sistema después de operaciones', () => {
    realizarOperacion(); // Realizar una operación para cambiar el estado
    const resultado = estadoSistema();
    expect(resultado).toContain('Operaciones exitosas');
  });
});
