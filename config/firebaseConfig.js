    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Y93Qkd30HIBM3XM2p9yrEPAimn7GjX8",
  authDomain: "dine-live.firebaseapp.com",
  projectId: "dine-live",
  storageBucket: "dine-live.firebasestorage.app",
  messagingSenderId: "293392448201",
  appId: "1:293392448201:web:e3441f72be1c175c646b18",
  measurementId: "G-F5F9LN04GB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);