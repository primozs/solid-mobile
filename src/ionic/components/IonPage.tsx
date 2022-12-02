import { onMount, JSX, Ref, splitProps, mergeProps } from 'solid-js';

type Props = {
  registerIonPage?: (e: HTMLDivElement) => void;
  children?: JSX.Element;
  ref?: Ref<any>;
} & JSX.HTMLAttributes<HTMLDivElement>;

export const IonPage = (props: Props) => {
  let element!: HTMLDivElement;

  const newProps = mergeProps(
    {
      registerIonPage: () => {
        //
      },
    },
    props,
  );
  const [local, rest] = splitProps(newProps, [
    'children',
    'ref',
    'class',
    'registerIonPage',
  ]);

  onMount(() => {
    if (typeof local.ref === 'function') {
      // eslint-disable-next-line
      local.ref(element);
    } else if (local.ref) {
      // eslint-disable-next-line
      local.ref = element;
    }
    if (element) local.registerIonPage(element);
  });

  return (
    <div ref={element} class={cls('ion-page', local.class)} {...rest}>
      {local.children}
    </div>
  );
};

const cls = (...a: (string | undefined)[]) => {
  return [...a].filter((item) => item !== undefined).join(' ');
};
