module.exports = {
  root: true,
  ignorePatterns: [
    'node_modules/',
    'lib/',
    'eslint.config.mjs',
    '.yarn/',
    '.bundle/',
  ],
  extends: ['@react-native', 'plugin:prettier/recommended'],
  plugins: ['prettier'],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'consistent',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
  },
};
