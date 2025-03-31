// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBacmbhCKFpl59NkYDWvzf-KqwW1NnfQD4",
  authDomain: "restaurant-app-d7dd9.firebaseapp.com",
  projectId: "restaurant-app-d7dd9",
  storageBucket: "restaurant-app-d7dd9.firebasestorage.app",
  messagingSenderId: "445011095593",
  appId: "1:445011095593:web:f1128f20a3a1fc77b3ec38",
  measurementId: "G-1YX0077BGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);