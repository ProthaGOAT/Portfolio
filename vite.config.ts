import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No Node path, no __dirname. Use relative string path instead.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
