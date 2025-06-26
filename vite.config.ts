import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["bbf8-92-47-34-10.ngrok-free.app"]
  },
  plugins: [react(), tsconfigPaths()],
})
