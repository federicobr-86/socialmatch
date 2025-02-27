// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkcVG8WkguRpsgJ_4dj3_xZJI6W13TzF8",
  authDomain: "social-match-445a6.firebaseapp.com",
  projectId: "social-match-445a6",
  storageBucket: "social-match-445a6.firebasestorage.app",
  messagingSenderId: "846767491772",
  appId: "1:846767491772:web:a51ca9d8a68c64da249eb9",
  measurementId: "G-DZ0Q7BMQ3P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
