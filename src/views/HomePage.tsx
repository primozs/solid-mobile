import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonContent,
  IonTitle,
  IonButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from '@/ionic';
import { createSignal } from 'solid-js';
import stayles from './HomePage.module.css';

export default function HomePage() {
  const [count, setCount] = createSignal(0);

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div class={stayles.container}>
          <strong>Ready to create an app?</strong>
          <p>
            Start with Ionic{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ionicframework.com/docs/components"
            >
              UI Components
            </a>
          </p>

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton onClick={() => setCount(count() - 1)} size="default">
                  Minus one
                </IonButton>
              </IonCol>

              <IonCol>
                <IonLabel>Count: {count()}</IonLabel>
              </IonCol>

              <IonCol>
                <IonButton onClick={() => setCount(count() + 1)} size="default">
                  Plus one
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
}
