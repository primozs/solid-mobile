import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonContent,
  IonTitle,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from '@/ionic';

export default function NotFound() {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Not found</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Not found</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>Not found 404</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
