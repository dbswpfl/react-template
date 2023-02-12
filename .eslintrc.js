module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'simple-import-sort/exports': 'warn',
    'import/order': 'warn'
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist'
  ],
  parserOptions: {
    tsdonfigRootDir: __dirname,
    project: './tsconfig.json'
  }
}
