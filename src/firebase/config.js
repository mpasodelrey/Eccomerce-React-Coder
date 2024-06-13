// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqtVAqN3fXAE0GuaT37Mx9ZtTbYqRYlHE",
  authDomain: "gmproviderseccomerce.firebaseapp.com",
  projectId: "gmproviderseccomerce",
  storageBucket: "gmproviderseccomerce.appspot.com",
  messagingSenderId: "141445624661",
  appId: "1:141445624661:web:e50315df224441997575dc",
  measurementId: "G-4532YC1Y8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);