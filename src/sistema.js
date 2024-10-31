// sistema.js

let estado = 'No iniciado';
let operacionesRealizadas = false;

/**
 * Inicializa el sistema y establece el estado a "Sistema iniciado".
 */
function inicializarSistema() {
  estado = 'Sistema iniciado';
  operacionesRealizadas = false;
}

/**
 * Simula la realización de una operación en el sistema.
 * Cambia el estado para reflejar que se han hecho operaciones exitosas.
 */
function realizarOperacion() {
  operacionesRealizadas = true;
  estado = 'Operaciones exitosas';
}

/**
 * Devuelve el estado actual del sistema.
 * @returns {string} - El estado actual del sistema.
 */
function estadoSistema() {
  return estado;
}

module.exports = {
  inicializarSistema,
  estadoSistema,
  realizarOperacion
};
