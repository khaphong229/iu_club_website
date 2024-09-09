
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQQBIF3H_SSQOCZMLZwx8lQV_xHpWl4y4",
  authDomain: "iu-club.firebaseapp.com",
  projectId: "iu-club",
  storageBucket: "iu-club.appspot.com",
  messagingSenderId: "1094940101049",
  appId: "1:1094940101049:web:f81aa75ebbae0dc3e40e68",
  measurementId: "G-PZTLZEG02P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };