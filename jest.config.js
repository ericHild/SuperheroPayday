module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src/app/'],
    testEnvironment: 'jsdom', // Utilise jsdom pour simuler un environnement de navigateur
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json', // Utilise le fichier de configuration TypeScript pour les tests
        stringifyContentPathRegex: '\\.html$',
      }
    },
    testPathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/dist"
    ],
    collectCoverage: true,
    coverageReporters: ['html'],
    coverageDirectory: 'coverage/jest',
    /*coverageThreshold: {
      global: {
        branches: 80,
        functions: 10,
        lines: 80,
        statements: -10,
      },
    }*/
  };