import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useCounterStore } from './counter'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default function InitPinia(app: App) {
  app.use(pinia)
  useCounterStore()
}
