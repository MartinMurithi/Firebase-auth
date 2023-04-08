import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAs89aEJFQCP5g1B9Sluo5BTJBZykbeJvc",
  authDomain: "loginsystem-a3fab.firebaseapp.com",
  projectId: "loginsystem-a3fab",
  storageBucket: "loginsystem-a3fab.appspot.com",
  messagingSenderId: "109380265015",
  appId: "1:109380265015:web:cce95ef9c2e2bfd1b7cbb2",
  measurementId: "G-ZKHBS1B9E3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//getAut, returns the auth instance associated with the provider.