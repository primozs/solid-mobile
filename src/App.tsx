import type { Component } from 'solid-js';
import { IonApp, IonRouterOutlet } from '@/ionic';

const App: Component = () => {
  return (
    <IonApp>
      <IonRouterOutlet />
    </IonApp>
  );
};

export default App;
