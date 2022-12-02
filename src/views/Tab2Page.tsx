import { IonPage, IonToolbar, IonHeader, IonContent, IonTitle } from '@/ionic';
import { ExpoloreContainer } from '@/components/ExploreContainer';

export default function Tab2Page() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExpoloreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
}
