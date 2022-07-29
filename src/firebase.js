import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv0lGl8WOcPMem8DeGCMKV9kzxRkFDXX0",
    authDomain: "clone-a828e.firebaseapp.com",
    projectId: "clone-a828e",
    storageBucket: "clone-a828e.appspot.com",
    messagingSenderId: "270056283595",
    appId: "1:270056283595:web:335e12a4fa80eaeb372a4e",
    measurementId: "G-MBPZYTVVWE"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export {db, auth, provider}