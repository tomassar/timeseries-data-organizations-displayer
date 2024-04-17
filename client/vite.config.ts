import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  esbuild: {
    loader: 'tsx', // Change from 'jsx' to 'tsx'
    include: [
      'src/**/*.tsx', // Include TypeScript files with 'tsx' extension
      'src/**/*.ts', // Include TypeScript files with 'ts' extension
      'node_modules/**/*.js',
    ],
    exclude: [],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
