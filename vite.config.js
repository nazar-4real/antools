import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgr from 'vite-plugin-svgr'
import { resolve } from 'path'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }

  return defineConfig({
    plugins: [react(), viteSvgr()],
    resolve: {
      alias: {
        'src': resolve(__dirname, 'src')
      }
    },
    server: {
      host: true,
      port: parseInt(process.env.VITE_APP_PORT),
      open: true,
      strictPort: true
    },
    build: {
      outDir: 'build'
    }
  })
}