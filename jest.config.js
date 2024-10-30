module.exports = {
    testEnvironment: 'node', // Entorno de prueba
    rootDir: './tests',      // Raíz de las pruebas
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    coverageDirectory: './coverage',
    collectCoverageFrom: [
        'src/**/*.js'
    ]
};
