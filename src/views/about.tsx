import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonContent,
  IonTitle,
  IonLabel,
} from '@/ionic';
import { createEffect, Suspense } from 'solid-js';
import { useRouteData } from '@solidjs/router';

export default function About() {
  const name = useRouteData<() => () => string>();

  createEffect(() => {
    console.log(name());
  });

  return (
    <IonPage>
      <IonHeader translucent={false}>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true} class="ion-padding">
        <IonLabel>
          <h1>
            We love
            <Suspense fallback={<span>...</span>}>
              <>&nbsp;{name()}</>
            </Suspense>
          </h1>
        </IonLabel>
      </IonContent>
    </IonPage>
  );
}
