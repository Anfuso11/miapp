// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXIOsa2d7GcSKzeDqJHuKG04FX9miGNJc",
  authDomain: "sneakersarg-745de.firebaseapp.com",
  projectId: "sneakersarg-745de",
  storageBucket: "sneakersarg-745de.appspot.com",
  messagingSenderId: "620100062702",
  appId: "1:620100062702:web:22dd46856f1326178b12ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);