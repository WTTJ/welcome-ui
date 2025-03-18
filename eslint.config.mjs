import eslint from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import { globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  perfectionist.configs['recommended-alphabetical'],
  globalIgnores(['lib/dist']),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: 'module',
    },
    plugins: {
      react,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        },
      ],
      'no-console': 'warn',
      'perfectionist/sort-imports': [
        'warn',
        {
          customGroups: {
            type: {
              'welcome-ui': ['@/'],
            },
            value: {
              'welcome-ui': ['@/'],
            },
          },
          groups: [
            'type',
            ['builtin', 'external'],
            'welcome-ui',
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
        },
      ],
    },
  }
)
