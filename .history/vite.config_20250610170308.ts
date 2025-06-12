import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const plugins = [vue(), vueJsx(), vueDevTools()]

  const env = loadEnv(mode, fileURLToPath(new URL('./env', import.meta.url)))

  console.log(env.VITE_APP_VERSION, '---env')
  switch (mode) {
    case 'localbuild':
      plugins.push(visualizer(open:true))
      break;
      default:break;
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    envDir: fileURLToPath(new URL('./env', import.meta.url)),
  }
})
