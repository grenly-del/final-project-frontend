// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW11YxEDsrW41XVrT7RsaEBn1rbt_B6b0",
  authDomain: "frontend-6f113.firebaseapp.com",
  databaseURL: "https://frontend-6f113-default-rtdb.firebaseio.com",
  projectId: "frontend-6f113",
  storageBucket: "frontend-6f113.firebasestorage.app",
  messagingSenderId: "979137354415",
  appId: "1:979137354415:web:df1fdc4dacb8933b4f125a",
  measurementId: "G-BKMNP1HHVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app