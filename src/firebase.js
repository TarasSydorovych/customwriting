
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import {getAuth, listUsers} from 'firebase/auth'

import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyAqxTNIy9zjFXIyeHbXHmtYhkQM6GFfvrI",
  authDomain: "new-project-4c242.firebaseapp.com",
  projectId: "new-project-4c242",
  storageBucket: "new-project-4c242.appspot.com",
  messagingSenderId: "808716919856",
  appId: "1:808716919856:web:20cc98f45bff8b356eb9f5",
  measurementId: "G-TP1W6T0Y02"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();  
export const auth = getAuth(app);
const analytics = getAnalytics(app);
 
