import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import windicss from 'vite-plugin-windicss'; // Import WindiCSS plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    windicss(), // Add WindiCSS plugin
  ],
});
