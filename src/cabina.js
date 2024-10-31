const cabinas = new Map();

/**
 * Crea una cabina con un ID único.
 * @param {string} id - ID de la cabina.
 * @returns {boolean} - Devuelve `true` si la cabina se creó exitosamente, o `false` si ya existe.
 */
function crearCabina(id) {
  if (cabinas.has(id)) {
    return false; // La cabina ya existe
  }
  cabinas.set(id, { posicion: 'estacion' });
  return true;
}

/**
 * Elimina una cabina con un ID específico.
 * @param {string} id - ID de la cabina.
 * @returns {boolean} - Devuelve `true` si la cabina fue eliminada, o `false` si no existe.
 */
function eliminarCabina(id) {
  if (!cabinas.has(id)) {
    return false; // La cabina no existe
  }
  cabinas.delete(id);
  return true;
}

/**
 * Mueve una cabina a una nueva posición.
 * @param {string} id - ID de la cabina.
 * @param {string} nuevaPosicion - Nueva posición de la cabina.
 * @returns {string} - Mensaje indicando el resultado del movimiento.
 */
function moverCabina(id, nuevaPosicion) {
  if (!cabinas.has(id)) {
    return 'Cabina no encontrada';
  }
  
  // Supongamos que "punto_maximo" es un límite que el sistema no permite sobrepasar
  if (nuevaPosicion === 'punto_maximo') {
    return 'Error de límite';
  }

  cabinas.get(id).posicion = nuevaPosicion;
  return 'Movimiento exitoso';
}

module.exports = {
  crearCabina,
  eliminarCabina,
  moverCabina,
  cabinas // Exportar para facilitar la limpieza de datos en pruebas
};
