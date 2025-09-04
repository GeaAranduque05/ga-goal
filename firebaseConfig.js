// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWikZpJg4tNFoIjZjbxcDQg5iDwXmOkJs",
  authDomain: "ag-mobile-app---tracker-1a49e.firebaseapp.com",
  projectId: "ag-mobile-app---tracker-1a49e",
  storageBucket: "ag-mobile-app---tracker-1a49e.firebasestorage.app",
  messagingSenderId: "366197956920",
  appId: "1:366197956920:web:0dc1702fcf1a95f9dc21cd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);