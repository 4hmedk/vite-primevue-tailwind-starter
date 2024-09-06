import { createApp } from 'vue'
import App from './App.vue'




import router from './router'
import bootApp from 'src/plugins'

const app = createApp(App);
await bootApp(app)
app.use(router)
app.mount('#app')
