// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCZ7uWCJhCCXXqRs7kJ2NplzMVlVC4YNA",
  authDomain: "react-toolkit-3f453.firebaseapp.com",
  projectId: "react-toolkit-3f453",
  storageBucket: "react-toolkit-3f453.firebasestorage.app",
  messagingSenderId: "1035894698233",
  appId: "1:1035894698233:web:3cbe89d4d9723e9f3a7228",
  measurementId: "G-XKY0FHS6XQ"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);