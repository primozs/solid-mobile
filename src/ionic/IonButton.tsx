import { defineCustomElement } from '@ionic/core/components/ion-button';
import { ION, onMount } from 'solid-js';

export const IonButton = (props: ION.IonButtonProps) => {
  onMount(() => {
    defineCustomElement();
  });
  // eslint-disable-next-line
  const { children, ...rest } = props;
  return (
    <ion-button
      type="button"
      buttonType={'button'}
      routerDirection={'forward'}
      {...rest}
    >
      {children}
    </ion-button>
  );
};
