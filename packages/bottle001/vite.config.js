import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './index.js', // Update this path to your library's entry point
      name: 'bottle001', // The name of your library
      fileName: (format) => `bottle001.${format}.js`,
    },
    rollupOptions: {},
  },
});
