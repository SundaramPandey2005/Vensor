// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDhUkZayOP9fia35z-H-MsOytt3Kl6YMU4",
  authDomain: "challenge-eeae8.firebaseapp.com",
  projectId: "challenge-eeae8",
  storageBucket: "challenge-eeae8.firebasestorage.app",
  messagingSenderId: "97850040394",
  appId: "1:97850040394:web:604c56673068d0e8da06b3",
  measurementId: "G-1K7CN22J4C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};