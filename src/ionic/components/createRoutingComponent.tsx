import { AnimationBuilder } from '@ionic/core/components';
import { Ref, JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { RouterOptions } from '../models';
import { RouterDirection } from '../models/RouterDirection';
import { defineCustomElement } from './component-lib/utils';

export interface HTMLStencilElement extends HTMLElement {
  componentOnReady(): Promise<this>;
}

type StencilSolidExternalProps<PropType, ElementType> = PropType &
  JSX.HTMLAttributes<ElementType> & {
    ref?: Ref<Element>;
    children?: JSX.Element;
    href?: string;
    routerLink?: string;
    routerDirection?: RouterDirection;
    routerOptions?: RouterOptions;
    routerAnimation?: AnimationBuilder;
  };

export const createRoutingComponent = <PropType, ElementType>(
  tagName: string,
  customElement?: any,
) => {
  defineCustomElement(tagName, customElement);

  const SolidComponent = (
    props: StencilSolidExternalProps<PropType, ElementType>,
  ) => {
    const [local, routerProps, rest] = splitProps(
      props,
      ['children', 'ref', 'onClick'],
      [
        'href',
        'routerLink',
        'routerDirection',
        'routerAnimation',
        'routerOptions',
      ],
    );

    // let context! Context<typeof NavContext>;

    const routerNavigate = (
      e: MouseEvent & {
        currentTarget: ElementType;
        target: Element;
      },
      rp: Pick<
        StencilSolidExternalProps<PropType, ElementType>,
        'routerLink' | 'routerDirection' | 'routerAnimation' | 'routerOptions'
      >,
    ) => {
      const { routerLink } = rp;

      if (routerLink !== undefined) {
        e.preventDefault();
        // context.navigate(
        //   routerLink,
        //   routerDirection,
        //   undefined,
        //   routerAnimation,
        //   routerOptions
        // );
      }
    };

    const handleClick = (
      e: MouseEvent & {
        currentTarget: ElementType;
        target: Element;
      },
    ) => {
      if (local.onClick && typeof local.onClick === 'function') {
        local?.onClick(e);

        if (!e.defaultPrevented) {
          routerNavigate(e, routerProps);
        }
      } else {
        routerNavigate(e, routerProps);
      }
    };

    return (
      <Dynamic
        component={tagName}
        ref={local.ref}
        onClick={handleClick}
        {...routerProps}
        href={
          routerProps.routerLink && !routerProps.href
            ? routerProps.routerLink
            : routerProps.href
        }
        {...rest}
      >
        {local.children}
      </Dynamic>
    );
  };

  return SolidComponent;
};
