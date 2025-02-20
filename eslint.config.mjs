import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import tailwindcss from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier', // ✅ 올바르게 추가
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:tailwindcss/recommended',
  ),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      tailwindcss,
      prettier,
    },
    rules: {
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
        },
      ],
      'tailwindcss/enforces-shorthand': 'warn',
      'prettier/prettier': 'error', // ✅ Prettier 적용
    },
  },
];

export default eslintConfig;
