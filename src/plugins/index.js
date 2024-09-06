// Array of plugin names to be loaded
const plugins = [
    'primevue',
    'axios',
    
    // Add or remove plugin names here
  ];
  
  export default async function bootApp(app) {
    for (const plugin of plugins) {
      try {
        const module = await import(`./${plugin}.js`);
        if (module.default && typeof module.default === 'function') {
          await module.default(app);
        } else {
          console.warn(`Plugin "${plugin}" does not export a default function.`);
        }
      } catch (error) {
        console.error(`Failed to load plugin "${plugin}":`, error);
      }
    }
  }