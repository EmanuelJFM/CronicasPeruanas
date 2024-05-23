import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp } from '@angular/fire/app'
import { provideStorage } from '@angular/fire/storage'
import { routes } from './app.routes';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideFirebaseApp(() => initializeApp( {
    apiKey: "AIzaSyDYhDIwBhQRW4z7SHApCyArHvab-BRG6Kk",
    authDomain: "pagina-noticias-e72ca.firebaseapp.com",
    projectId: "pagina-noticias-e72ca",
    storageBucket: "pagina-noticias-e72ca.appspot.com",
    messagingSenderId: "30010539765",
    appId: "1:30010539765:web:6c8cd3672f450a4cba8fbc"
  })),
  provideStorage(() => getStorage()),
  provideAnimationsAsync(),
  {
    provide: FIREBASE_OPTIONS,
    useValue: {
      apiKey: "AIzaSyDYhDIwBhQRW4z7SHApCyArHvab-BRG6Kk",
      authDomain: "pagina-noticias-e72ca.firebaseapp.com",
      projectId: "pagina-noticias-e72ca",
      storageBucket: "pagina-noticias-e72ca.appspot.com",
      messagingSenderId: "30010539765",
      appId: "1:30010539765:web:6c8cd3672f450a4cba8fbc"
    }
  }
  ]
};
