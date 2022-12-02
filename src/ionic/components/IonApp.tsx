import { JSX as LocalJSX } from '@ionic/core/components';
import { splitProps, Ref, ParentProps } from 'solid-js';
import { IonAppInner } from './inner-proxies';

type Props = LocalJSX.IonApp &
  ParentProps<{
    ref?: Ref<HTMLIonAppElement>;
  }>;

export const IonApp = /*@__PURE__*/ (props: Props) => {
  const [local, rest] = splitProps(props, ['children']);
  return <IonAppInner {...rest}>{local.children}</IonAppInner>;
};
