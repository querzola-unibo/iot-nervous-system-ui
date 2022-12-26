import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
