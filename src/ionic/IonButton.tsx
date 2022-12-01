import { defineCustomElement } from '@ionic/core/components/ion-button';
import { ION } from 'solid-js';

defineCustomElement();

export const IonButton = (props: ION.IonButtonProps) => {
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
