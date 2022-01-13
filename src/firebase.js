import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB7XKqU3LjNZF8cBPttA_k024-WxUHWM_Q",
    authDomain: "clone-25eda.firebaseapp.com",
    projectId: "clone-25eda",
    storageBucket: "clone-25eda.appspot.com",
    messagingSenderId: "508186140133",
    appId: "1:508186140133:web:8976c55722980f394de30c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };