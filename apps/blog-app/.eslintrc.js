// See ../../.eslintrc.base.js
module.exports = {
  root: true,
  ignorePatterns: ['.next', '**/.out'],
  extends: [
    '../../.eslintrc.base.js',
    // Add specific rules for react
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    // Add specific rules for nextjs
    'plugin:@next/next/core-web-vitals',
  ],
  // By loading testing-library in plugins rather than extending the recommended
  // we keep the possibility to enable it on specific files only (*.test.ts...)
  plugins: ['testing-library'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-unescaped-entities': 'off',
    // next/image might not be yet a good move as of NextJs v11.
    // https://github.com/vercel/next.js/discussions/16832
    '@next/next/no-img-element': 'off',
  },
  overrides: [
    {
      // For performance run jest/recommended on test files, not regular code
      files: ['**/*.test.{ts,tsx}'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['src/pages/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/display-name': 'off',
      },
    },
    {
      files: ['src/backend/api/**/*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['config/jest/test-utils.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/export': 'off',
      },
    },
  ],
};
