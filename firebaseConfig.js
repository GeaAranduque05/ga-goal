// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZdNqAN0cQAE6GaXTuxIuRUNdl21I66kg",
  authDomain: "ag-mobile-app---tracker.firebaseapp.com",
  projectId: "ag-mobile-app---tracker",
  storageBucket: "ag-mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "506415308572",
  appId: "1:506415308572:web:9b7aaca960c55a5f44a4d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)