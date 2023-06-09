import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        'src': resolve(__dirname, 'src')
      }
    },
    server: {
      host: true,
      open: true,
      strictPort: true,
      port: parseInt(process.env.VITE_APP_PORT)
    },
    build: {
      outDir: 'build'
    }
  })
}