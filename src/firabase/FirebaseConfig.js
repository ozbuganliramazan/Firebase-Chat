// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx5C-dPlTxhrYx4KBsuT6Vq9YvHxtx75A",
  authDomain: "chateroots.firebaseapp.com",
  projectId: "chateroots",
  storageBucket: "chateroots.appspot.com",
  messagingSenderId: "572607792904",
  appId: "1:572607792904:web:317db1ac1cd9bb96decebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
