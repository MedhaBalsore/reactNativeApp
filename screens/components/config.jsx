// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQSZwdqzda-C2YGuU1o4re1lMlNksatT4",
  authDomain: "appcupteamis20.firebaseapp.com",
  projectId: "appcupteamis20",
  storageBucket: "appcupteamis20.appspot.com",
  messagingSenderId: "288204332269",
  appId: "1:288204332269:web:1a3b4fbbf20423763c00e4",
  measurementId: "G-W0XG4Z9NYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export {firebase};