import { IonPage, IonToolbar, IonHeader, IonContent, IonTitle } from '@/ionic';
import { ExpoloreContainer } from '@/components/ExploreContainer';

export default function Tab1Page() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExpoloreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
}
