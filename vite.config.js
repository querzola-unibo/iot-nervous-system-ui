import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  server: {
    port: 1234,
    open: true
  },
  build: {
    emptyOutDir: true,
    outDir: '../dist'
  }
})
