import { IonPage, IonToolbar, IonHeader, IonContent, IonTitle } from '@/ionic';
import { ExpoloreContainer } from '@/components/ExploreContainer';

export default function Tab3Page() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExpoloreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
}
