import type { App } from 'vue'
import router from './index'

export default function InitRouter(app: App) {
  app.use(router)
}
