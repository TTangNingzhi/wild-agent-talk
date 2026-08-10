import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Project page at https://ttangningzhi.github.io/wild-agent-talk/
  base: '/wild-agent-talk/',
  plugins: [react()],
})
