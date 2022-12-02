import type { JSX } from '@ionic/core/components';

import { /*@__PURE__*/ createSolidComponent } from './component-lib';

import { defineCustomElement as defineIonContent } from '@ionic/core/components/ion-content.js';
import { defineCustomElement as defineIonHeader } from '@ionic/core/components/ion-header.js';
import { defineCustomElement as defineIonToolbar } from '@ionic/core/components/ion-toolbar.js';
import { defineCustomElement as defineIonTitle } from '@ionic/core/components/ion-title.js';

export const IonContent = /*@__PURE__*/ createSolidComponent<
  JSX.IonContent,
  HTMLIonContentElement
>('ion-content', defineIonContent);

export const IonHeader = /*@__PURE__*/ createSolidComponent<
  JSX.IonHeader,
  HTMLIonHeaderElement
>('ion-header', defineIonHeader);

export const IonToolbar = /*@__PURE__*/ createSolidComponent<
  JSX.IonToolbar,
  HTMLIonToolbarElement
>('ion-toolbar', defineIonToolbar);

export const IonTitle = /*@__PURE__*/ createSolidComponent<
  JSX.IonTitle,
  HTMLIonTitleElement
>('ion-title', defineIonTitle);
