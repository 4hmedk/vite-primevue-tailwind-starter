import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './css/index.css'
import PrimeVue from 'primevue/config';
import wind from 'src/presets/wind';
import router from './router'

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: wind,
});
app.use(router)
app.mount('#app')
