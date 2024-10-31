const { crearCabina, eliminarCabina, moverCabina } = require('../src/cabina'); 

describe('Operaciones de Cabina', () => {
  describe('Crear cabina', () => {
    test('Crear una cabina con ID único', () => {
      const resultado = crearCabina('ID_nueva');
      expect(resultado).toBeTruthy();
    });

    test('Intentar crear cabina con ID duplicado', () => {
      crearCabina('ID_duplicada');
      const resultado = crearCabina('ID_duplicada');
      expect(resultado).toBeFalsy();
    });
  });

  describe('Eliminar cabina', () => {
    test('Eliminar una cabina existente', () => {
      crearCabina('ID_a_eliminar');
      const resultado = eliminarCabina('ID_a_eliminar');
      expect(resultado).toBeTruthy();
    });

    test('Intentar eliminar cabina inexistente', () => {
      const resultado = eliminarCabina('ID_inexistente');
      expect(resultado).toBeFalsy();
    });
  });

  describe('Mover cabina', () => {
    test('Mover cabina a una posición válida', () => {
      crearCabina('ID_mover');
      const resultado = moverCabina('ID_mover', 'puntoA');
      expect(resultado).toEqual('Movimiento exitoso');
    });

    test('Intentar mover cabina fuera del límite', () => {
      crearCabina('ID_fuera_limite');
      const resultado = moverCabina('ID_fuera_limite', 'punto_maximo');
      expect(resultado).toEqual('Error de límite');
    });
  });
});
