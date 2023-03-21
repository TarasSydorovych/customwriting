
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import {getAuth, listUsers} from 'firebase/auth'

import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyCp3Q77dPizwoAt5QykYxWRWEbvleamcTE",
  authDomain: "essay-wanted.firebaseapp.com",
  databaseURL: "https://essay-wanted-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "essay-wanted",
  storageBucket: "essay-wanted.appspot.com",
  messagingSenderId: "244635862768",
  appId: "1:244635862768:web:356f71d2ab3dc89c1fa435",
  measurementId: "G-TVXC6GF6RQ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();  
export const auth = getAuth(app);
const analytics = getAnalytics(app);
 
