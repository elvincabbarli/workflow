import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['dist/**'] },
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },
];