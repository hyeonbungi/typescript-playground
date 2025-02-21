import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  // 무시할 디렉터리나 파일
  {
    ignores: ['dist/', '**/*.d.ts'],
  },
  // TypeScript 및 Prettier 설정
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // @typescript-eslint 권장 규칙
      ...tsPlugin.configs.recommended.rules,
      // Prettier 충돌 제거
      ...configPrettier.rules,
      // Prettier 실행
      'prettier/prettier': 'error',
    },
  },
];
