import { render } from 'solid-js/web';

// Core CSS required for Ionic components to work properly
import '@ionic/core/css/core.css';

// Basic CSS for apps built with Ionic
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

// Optional CSS utils that can be commented out
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

// Theme variables
import './theme/variables.css';

import App from './App';
import { routes } from './router';
import { swRegister } from './swUtils';
import { IonicSolid } from '@/ionic/ionic-solid';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

swRegister().catch((error) => console.error(error));

render(
  () => (
    <IonicSolid config={{ mode: 'md' }} routes={routes}>
      <App />
    </IonicSolid>
  ),
  document.getElementById('app') as HTMLElement,
);

defineCustomElements(window);
