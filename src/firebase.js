// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm3yaN7M22AEujJtwvkpDMQTvZCKDqXh8",
  authDomain: "royal-x-33a42.firebaseapp.com",
  projectId: "royal-x-33a42",
  storageBucket: "royal-x-33a42.firebasestorage.app",
  messagingSenderId: "177549291759",
  appId: "1:177549291759:web:3c7cc43813fc18e1896b1a",
  measurementId: "G-P94Z0KVW82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);