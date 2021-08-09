import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA2s2g_2DdsJIgNiYJSentqWesFgS-Ovs8',
  authDomain: 'the-bet-app.firebaseapp.com',
  databaseURL: 'https://the-bet-app-default-rtdb.firebaseio.com/',
  projectId: 'the-bet-app',
  storageBucket: 'the-bet-app.appspot.com',
  messagingSenderId: '519761783832',
  appId: '1:519761783832:ios:be5554e372cb492c9f676d',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };