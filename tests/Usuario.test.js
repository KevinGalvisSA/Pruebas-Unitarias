const { solicitarViaje, verificarAcceso } = require('../src/usuario');

describe('Interacciones de Usuario', () => {
  describe('Solicitar viaje', () => {
    test('Usuario autorizado solicita viaje', () => {
      const resultado = solicitarViaje('usuario_autorizado');
      expect(resultado).toEqual('Viaje solicitado');
    });

    test('Usuario no autorizado intenta solicitar viaje', () => {
      const resultado = solicitarViaje('usuario_no_autorizado');
      expect(resultado).toEqual('Acceso denegado');
    });
  });

  describe('Verificar acceso', () => {
    test('Verificar acceso de usuario autorizado', () => {
      const resultado = verificarAcceso('usuario_autorizado');
      expect(resultado).toBeTruthy();
    });

    test('Intentar verificar acceso de usuario no autorizado', () => {
      const resultado = verificarAcceso('usuario_no_autorizado');
      expect(resultado).toBeFalsy();
    });
  });
});
