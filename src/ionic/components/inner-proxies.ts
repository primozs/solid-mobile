import { JSX } from '@ionic/core/components';
import { defineCustomElement as defineIonApp } from '@ionic/core/components/ion-app.js';

import { /*@__PURE__*/ createSolidComponent } from './component-lib';

export const IonAppInner = /*@__PURE__*/ createSolidComponent<
  JSX.IonApp,
  HTMLIonAppElement
>('ion-app', defineIonApp);
