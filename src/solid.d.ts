/// <reference types="vite/client" />
// https://github.com/Microsoft/TypeScript/issues/14877
/// <reference lib="WebWorker" />

import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { Components } from '@ionic/core/dist/types/components';
import { Component, ComponentProps } from 'solid-js';

declare global {
  interface HTMLElementTagNameMap {}
}

declare namespace LocalJSX {
  interface IntrinsicElements {}
}

export { LocalJSX as JSX };

declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {}
  }
}

declare module 'solid-js' {
  namespace ION {
    type IonButtonProps = JSX.ButtonHTMLAttributes &
      Partial<Components.IonButton>;
    // & {
    //   children?: JSX.Element;
    // };
  }
  namespace JSX {
    interface IntrinsicElements extends ElementProps<HTMLElementTagNameMap> {
      'ion-button': ION.IonButtonProps;
    }
  }
}
