import { IonPage, IonToolbar, IonHeader, IonContent, IonTitle } from '@/ionic';
import stayles from './HomePage.module.css';

export default function HomePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true} class="ion-padding">
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
        </div>
      </IonContent>
    </IonPage>
  );
}
