// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMzMsvFiJk37Yg9Mv6nCnvDRd3kUfQX0E",
  authDomain: "ema-john-with-firebase-a-8e6e3.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-8e6e3",
  storageBucket: "ema-john-with-firebase-a-8e6e3.appspot.com",
  messagingSenderId: "281721490663",
  appId: "1:281721490663:web:4111fa4a21a3097d5fa642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;