import type { UserConfig } from 'vite'
import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, loadEnv } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const env = loadEnv(mode, fileURLToPath(new URL('./env', import.meta.url), '')
  console.log(env.VITE_APP_VERSION, '---env', fileURLToPath(new URL('./env', import.meta.url)), process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    envDir: fileURLToPath(new URL('./env', import.meta.url)),
  }
})
