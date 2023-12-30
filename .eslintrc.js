module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  rules: {
    'react/prop-types': 'OFF',
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended'],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {},
    },
  ],
};
