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
      plugins.push(visualizer({ open: true, template: 'treemap' }))
      break
    default:break
  }

  return {
    plugins,
    server: {
      port: 3000,
      open: true,
      strictPort: false,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    envDir: fileURLToPath(new URL('./env', import.meta.url)),
    build: {
      sourcemap: mode in ['development', 'preview'],
    },
    esbuild: {
      drop: ['debugger', 'console'],
    },
    output: { // 静态资源分类打包
      chunkFileNames: 'static/js/[name]-[hash].js',
      // 引用包处文件资源打包输出名 入import
      entryFileNames: 'static/js/[name]-[hash].js',
      // 入口函数打包输出名
      manualChunks(id) { // 静态资源分拆打包
        if (id.includes('.pnpm')) {
          return id.toString().split('node_modules/')[1].split('.pnpm/')[1].split('/')[0].toString()
        }
        if (id.includes('node_modules')) {
          return id.toString().split('node_modules/')[1].split('/')[0].toString()
        }
      },
    },
  }
})
