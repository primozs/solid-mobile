/// <reference types="vite/client" />
// https://github.com/Microsoft/TypeScript/issues/14877
/// <reference lib="WebWorker" />

import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements extends ElementProps<HTMLElementTagNameMap> {}
  }
}
