// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY2M1rmU0h7ztcBY75FP_3l5o0xsasdBA",
  authDomain: "summarizer-database.firebaseapp.com",
  projectId: "summarizer-database",
 storageBucket: "summarizer-database.appspot.com",

  messagingSenderId: "56569347459",
  appId: "1:56569347459:web:7cba5048f33dea7e54cab6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();