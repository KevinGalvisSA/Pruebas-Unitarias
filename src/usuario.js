// Lista de usuarios autorizados para simplificación
const usuariosAutorizados = new Set(['usuario_autorizado']); // Ejemplo: lista de usuarios con permisos

/**
 * Permite a un usuario solicitar un viaje.
 * @param {string} usuario - ID del usuario.
 * @returns {string} - Mensaje indicando el resultado de la solicitud.
 */
function solicitarViaje(usuario) {
  if (!usuariosAutorizados.has(usuario)) {
    return 'Acceso denegado';
  }
  return 'Viaje solicitado';
}

/**
 * Verifica si un usuario tiene acceso autorizado.
 * @param {string} usuario - ID del usuario.
 * @returns {boolean} - `true` si el usuario tiene acceso, `false` en caso contrario.
 */
function verificarAcceso(usuario) {
  return usuariosAutorizados.has(usuario);
}

module.exports = {
  solicitarViaje,
  verificarAcceso,
  usuariosAutorizados
};
