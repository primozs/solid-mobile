import type { Component } from 'solid-js';
import { IonButton } from '@/ionic/IonButton';
import { Router } from '@solidjs/router';
import { Layout } from '@/views/Layout';

const App: Component = () => {
  return (
    <>
      <Router>
        <Layout />
      </Router>
      <IonButton>Ion button</IonButton>
    </>
  );
};

export default App;
