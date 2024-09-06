import PrimeVue from 'primevue/config';
import wind from 'src/presets/wind';

export default function bootPrimeVue(app) {
    console.log('bootPrimeVue')
    app.use(PrimeVue, {
        unstyled: true,
        pt: wind,
    });
  }