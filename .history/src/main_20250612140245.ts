import { createApp } from 'vue'
import App from './App.vue'
import InitRouter from './router/InitRouter'
import InitPinia from './stores/InitPinia'
import '@/assets/styles'

const app = createApp(App)
InitPinia(app)
InitRouter(app)

console.log(import.meta.env, '---env')

app.config.errorHandler = (err) => {
  console.log(err)
}
let b = 2
app.mount('#app')
