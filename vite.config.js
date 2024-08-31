import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/samyogPortfolio/', // Set this to your GitHub Pages repository name
  plugins: [react()],
})
