import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQPOyvZeRcKwQaU-7M1ET4jNsBp_tNFNc",
  authDomain: "linkedin-clone-5135c.firebaseapp.com",
  projectId: "linkedin-clone-5135c",
  storageBucket: "linkedin-clone-5135c.appspot.com",
  messagingSenderId: "110017208062",
  appId: "1:110017208062:web:34e846f08aa94f39e00faf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };