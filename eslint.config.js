import js from '@eslint/js'
import globals from 'globals'
import eslint from "eslint-plugin-react"
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { eslint },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Formatting rules
      'indent': ['error', 2, { 
        'SwitchCase': 1,
        'ignoredNodes': ['TemplateLiteral']
      }],
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }],
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      'no-multi-spaces': 'error',
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      
      // Code quality rules
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
    },
  },
])