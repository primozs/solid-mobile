import { Ref, JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

// example how to create element similar like in react
// import { spread } from 'solid-js/web';
// function createElement(tag: string, props: any) {
//   const el = document.createElement(tag);
//   spread(el, props);
//   return el;
// }

export interface HTMLStencilElement extends HTMLElement {
  componentOnReady(): Promise<this>;
}

type StencilSolidExternalProps<PropType, ElementType> = PropType &
  JSX.HTMLAttributes<ElementType> & {
    ref?: Ref<any>;
    children?: JSX.Element;
  };

export const createSolidComponent = <
  PropType,
  ElementType extends HTMLStencilElement,
>(
  tagName: string,
  defineCustomElement?: () => void,
) => {
  if (defineCustomElement !== undefined) {
    defineCustomElement();
  }

  const SolidComponent = (
    props: StencilSolidExternalProps<PropType, ElementType>,
  ) => {
    const [local, rest] = splitProps(props, ['children', 'ref']);
    return (
      <Dynamic component={tagName} ref={local.ref} {...rest}>
        {local.children}
      </Dynamic>
    );
  };

  return SolidComponent;
};
