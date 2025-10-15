import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [
    basicSsl(),
    react({
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  server: {
    host: true,
    https:true,
  },
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@", replacement: "/src" },
    ],
  },
});