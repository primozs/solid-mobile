import { JSX, Ref, splitProps, mergeProps, createSignal } from 'solid-js';
import { mergeRefs } from '@solid-primitives/refs';

type Props = {
  children?: JSX.Element;
  ref?: Ref<HTMLDivElement>;
} & JSX.HTMLAttributes<HTMLDivElement>;

export const IonPage = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [element, setElement] = createSignal<HTMLDivElement>();

  const newProps = mergeProps(props);
  const [local, rest] = splitProps(newProps, ['children', 'ref', 'class']);

  return (
    <div
      ref={mergeRefs((el: HTMLDivElement) => {
        setElement(el);
      }, local.ref)}
      class={cls('ion-page', local.class)}
      {...rest}
    >
      {local.children}
    </div>
  );
};

const cls = (...a: (string | undefined)[]) => {
  return [...a].filter((item) => item !== undefined).join(' ');
};
