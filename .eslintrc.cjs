// @ts-check

/**
 * @type {import('eslint').Linter.Config}
 **/
module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:perfectionist/recommended-natural',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['*.js', '*.mjs', '*.cjs'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'tailwindcss', 'perfectionist'],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/unbound-method': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'perfectionist/sort-array-includes': 'warn',
    'perfectionist/sort-astro-attributes': 'warn',
    'perfectionist/sort-classes': 'warn',
    'perfectionist/sort-enums': 'warn',

    'perfectionist/sort-exports': 'warn',

    'perfectionist/sort-imports': [
      'warn',
      {
        groups: [
          ['builtin-type', 'builtin', 'external-type', 'external'],
          ['internal-type', 'internal'],
          ['parent-type', 'parent', 'sibling-type', 'sibling', 'index-type', 'index'],
          ['side-effect', 'side-effect-style', 'style'],
          'object',
          'unknown',
        ],
        'internal-pattern': ['@/**'],
      },
    ],
    'perfectionist/sort-interfaces': 'warn',
    'perfectionist/sort-jsx-props': 'warn',
    'perfectionist/sort-maps': 'warn',
    'perfectionist/sort-named-exports': 'warn',
    'perfectionist/sort-named-imports': 'warn',
    'perfectionist/sort-object-types': 'warn',
    'perfectionist/sort-objects': 'warn',
    'perfectionist/sort-union-types': 'warn',
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    next: {
      rootDir: ['./'],
    },
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.js',
    },
  },
};
