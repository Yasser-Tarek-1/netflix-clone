// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NETFLIX_CLONE_FIREBASE_API_KEY,
//   authDomain: process.env.NETFLIX_CLONE_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NETFLIX_CLONE_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NETFLIX_CLONE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NETFLIX_CLONE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NETFLIX_CLONE_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC0e34dkHzaEsV6ZwQM39a8oqZKOEKIx90",
  authDomain: "netflix-4b7e5.firebaseapp.com",
  projectId: "netflix-4b7e5",
  storageBucket: "netflix-4b7e5.appspot.com",
  messagingSenderId: "419616607053",
  appId: "1:419616607053:web:74bfdf4a537fe430198504",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Firestore
const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  db,
};
