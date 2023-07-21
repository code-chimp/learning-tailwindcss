import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  // @ts-ignore
  viteConfig,
  defineConfig({
    resolve: {
      mainFields: ['module'],
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/setupTests.ts',
      reporters: ['default', 'junit'],
      outputFile: {
        junit: './coverage/junit.xml',
      },
      coverage: {
        provider: 'istanbul',
        reporter: ['json', 'text', 'cobertura', 'html'],
        all: true,
        include: ['src/**/*.{ts,tsx}'],
        exclude: [
          'src/@enumerations/**',
          'src/@interfaces/**',
          'src/@mocks/**',
          'src/@types/**',
          'src/services/**',
          'src/**/index.{ts,tsx}',
          'src/main.tsx',
          'src/setupTests.ts',
        ],
        branches: 80,
        functions: 90,
        statements: 90,
      },
    },
  }),
);
