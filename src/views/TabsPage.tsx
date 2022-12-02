import { IonPage, IonRouterOutlet } from '@/ionic';
import { Link } from '@solidjs/router';

export default function TabsPage() {
  return (
    <IonPage>
      <div class="tabs">
        <IonRouterOutlet />

        <nav class="tab-bar">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </IonPage>
  );
}
