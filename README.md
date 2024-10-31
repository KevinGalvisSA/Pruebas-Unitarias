# Sistema de Control de Teleférico

Este proyecto implementa un sistema de control de teleférico, que permite la gestión de cabinas y el acceso de usuarios, además de ofrecer una interfaz de pruebas unitarias para verificar su correcto funcionamiento.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Características](#características)
- [Estructura de Archivos](#estructura-de-archivos)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Pruebas Unitarias](#pruebas-unitarias)
- [Detalles de los Módulos](#detalles-de-los-módulos)
- [Hecho Por](#hecho-por)
- [Campuslands](#campuslands)

---

## Descripción General

El **Sistema de Control de Teleférico** es una aplicación de back-end en Node.js que simula el manejo y control de un teleférico. Permite gestionar las cabinas, autorizar usuarios para realizar viajes y mantener el estado del sistema de control. Este sistema está diseñado para ser probado a través de pruebas unitarias usando el framework **Jest**.

## Características

- **Gestión de Cabinas**: Crear, eliminar y mover cabinas en el sistema de teleférico.
- **Control de Usuarios**: Autorizar o denegar solicitudes de viaje basadas en la autenticación de usuario.
- **Estado del Sistema**: Inicializar el sistema y verificar el estado general después de operaciones.
- **Pruebas Unitarias**: Pruebas exhaustivas para cada módulo (cabina, usuario y sistema) utilizando Jest.

## Estructura de Archivos

La estructura de carpetas y archivos del proyecto es la siguiente:

```plaintext
├── src
│   ├── cabina.js         # Módulo para gestionar las cabinas del teleférico
│   ├── usuario.js        # Módulo para manejar los usuarios y sus permisos de acceso
│   └── sistema.js        # Módulo principal para inicializar y gestionar el estado del sistema
├── tests
│   ├── Cabina.test.js    # Pruebas unitarias para el módulo de cabinas
│   ├── Usuario.test.js   # Pruebas unitarias para el módulo de usuarios
│   └── Sistema.test.js   # Pruebas unitarias para el módulo principal del sistema
├── .gitignore            # Archivo que especifica los archivos y carpetas que Git debe ignorar
├── package.json          # Archivo de configuración del proyecto y dependencias
├── jest.config.js        # Archivo que configura opciones específicas de Jest
└── README.md             # Documentación del proyecto
```

## Instalación y Ejecución

### Prerrequisitos

- **Node.js** (v14 o superior)
- **npm** (v6 o superior)

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/KevinGalvisSA/Pruebas-Unitarias.git
   cd Pruebas-Unitarias
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

### Ejecución del Sistema

Este proyecto no tiene una interfaz de usuario o una API activa, ya que es una biblioteca de funcionalidades para gestionar un sistema de teleférico. Las funciones se ejecutan y verifican a través de pruebas unitarias.

Para ejecutar las pruebas unitarias, sigue las instrucciones de la siguiente sección.

## Pruebas Unitarias

Este proyecto utiliza **Jest** como framework de pruebas. Las pruebas unitarias están organizadas por módulos y se encuentran en la carpeta `tests`.

### Ejecutar Pruebas

Para ejecutar todas las pruebas, se puede utilizar cualquiera de los siguientes comandos:

```bash
npm test
--
npx jest
```

### Descripción de las Pruebas

Las pruebas cubren diferentes casos para asegurar el correcto funcionamiento de cada módulo del sistema:

- **Cabina**: Pruebas de creación, eliminación y movimiento de cabinas, incluyendo casos límite.
- **Usuario**: Pruebas de autorización para verificar si un usuario puede solicitar un viaje.
- **Sistema**: Pruebas para verificar el estado del sistema después de operaciones como inicialización y cambios de estado.

### Resultados Esperados

Cada prueba está diseñada para verificar casos exitosos y de error. Al ejecutar las pruebas, deberías ver resultados similares a los siguientes:

```plaintext
PASS  tests/Cabina.test.js
PASS  tests/Usuario.test.js
PASS  tests/Sistema.test.js
```

Si alguna prueba falla, verifica la implementación en los archivos de `src` correspondientes.

## Detalles de los Módulos

### `src/cabina.js`

Este módulo maneja las cabinas en el sistema. Las principales funciones son:

- **crearCabina(id)**: Crea una cabina con un ID único.
- **eliminarCabina(id)**: Elimina una cabina especificada.
- **moverCabina(id, nuevaPosicion)**: Mueve una cabina a una nueva posición. Maneja errores cuando la posición es un límite prohibido.

### `src/usuario.js`

Este módulo gestiona los usuarios del sistema y controla su autorización:

- **solicitarViaje(usuario)**: Permite a un usuario autorizado solicitar un viaje.
- **verificarAcceso(usuario)**: Verifica si un usuario tiene permiso de acceso para solicitar viajes.

### `src/sistema.js`

Este módulo controla el estado general del sistema:

- **inicializarSistema()**: Inicializa el sistema y establece el estado a "Sistema iniciado".
- **estadoSistema()**: Devuelve el estado actual del sistema.
- **realizarOperacion()**: Realiza una operación para cambiar el estado a "Operaciones exitosas".


## Hecho por

- [Kevin Santiago Galvis Arias - M3](https://github.com/KevinGalvisSA)


## Campuslands
![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYssTiQH-eIlsZKQZm-iYKkeY-V26_NMf-Q&s)

