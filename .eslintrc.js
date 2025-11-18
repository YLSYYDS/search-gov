module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'max-len': ['warn', { 'code': 120 }]
  },
  ignorePatterns: ['node_modules/', 'coverage/', 'vendor/'],
};
