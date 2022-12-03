import { JSX } from '@ionic/core/components';
import { defineCustomElement as defineIonApp } from '@ionic/core/components/ion-app.js';
import { defineCustomElement as defineIonBackButton } from '@ionic/core/components/ion-back-button.js';
import { defineCustomElement as defineIonRouterOutlet } from '@ionic/core/components/ion-router-outlet.js';
import { defineCustomElement as defineIonTabBar } from '@ionic/core/components/ion-tab-bar.js';
import { defineCustomElement as defineIonTabButton } from '@ionic/core/components/ion-tab-button.js';
import { JSX as IoniconsJSX } from 'ionicons';
import { defineCustomElement as defineIonIcon } from 'ionicons/components/ion-icon.js';

import { /*@__PURE__*/ createSolidComponent } from './component-lib';

export const IonTabButtonInner = /*@__PURE__*/ createSolidComponent<
  JSX.IonTabButton & { onIonTabButtonClick?: (e: CustomEvent) => void },
  HTMLIonTabButtonElement
>('ion-tab-button', defineIonTabButton);

export const IonTabBarInner = /*@__PURE__*/ createSolidComponent<
  JSX.IonTabBar,
  HTMLIonTabBarElement
>('ion-tab-bar', defineIonTabBar);

export const IonBackButtonInner = /*@__PURE__*/ createSolidComponent<
  Omit<JSX.IonBackButton, 'icon'>,
  HTMLIonBackButtonElement
>('ion-back-button', defineIonBackButton);

export const IonRouterOutletInner = /*@__PURE__*/ createSolidComponent<
  JSX.IonRouterOutlet,
  HTMLIonRouterOutletElement
>('ion-router-outlet', defineIonRouterOutlet);

export const IonAppInner = /*@__PURE__*/ createSolidComponent<
  JSX.IonApp,
  HTMLIonAppElement
>('ion-app', defineIonApp);

// ionicons
export const IonIconInner = /*@__PURE__*/ createSolidComponent<
  IoniconsJSX.IonIcon,
  HTMLIonIconElement
>('ion-icon', defineIonIcon);
