import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import stylisticjs from '@stylistic/eslint-plugin-js';

export default [
  { name: 'Carmen Lint' },
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticjs,
    },
  },
];
