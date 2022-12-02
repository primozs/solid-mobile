import { createSignal } from 'solid-js';
import { IonPage, IonToolbar, IonHeader, IonContent, IonTitle } from '@/ionic';
import { IonButton } from '@/ionic/IonButton';

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Counter</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Counter</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton onClick={() => setCount(count() - 1)}>-</IonButton>
        <output>Count: {count()}</output>
        <IonButton onClick={() => setCount(count() + 1)}>+</IonButton>
      </IonContent>
    </IonPage>
  );
}
