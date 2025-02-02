import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';

// Pinia-Instanz erstellen
const pinia = createPinia();

// Pinia als globalen Provider hinzufügen
setup((app) => {
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;