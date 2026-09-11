import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'; // For routing issues

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@projects': path.resolve(__dirname, './src/projects'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets' : path.resolve(__dirname, './src/assets'),
    },
  },
})
