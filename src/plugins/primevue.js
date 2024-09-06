import PrimeVue from 'primevue/config';
import Aura from 'src/presets/aura';
import 'src/css/index.css'
import 'primeicons/primeicons.css'

export default function bootPrimeVue(app) {
    console.log('bootPrimeVue')
    app.use(PrimeVue, {
        unstyled: true,
        pt: Aura,
    });
  }