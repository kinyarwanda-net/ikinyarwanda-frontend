module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!**/coverage/**'
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover']
};
