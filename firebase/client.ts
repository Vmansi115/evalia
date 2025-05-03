// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP6O5lNKHZVmvrcGe7Dn50uL1hUL_WezE",
  authDomain: "evalia-3468b.firebaseapp.com",
  projectId: "evalia-3468b",
  storageBucket: "evalia-3468b.firebasestorage.app",
  messagingSenderId: "1008118247863",
  appId: "1:1008118247863:web:56eb634cabae8edd257832",
  measurementId: "G-RNDD2JMESL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);