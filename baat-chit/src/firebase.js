// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBidFX0gg9Ew2zZSS7RsVVJNn7FK-Bm83A",
  authDomain: "baat-chit-2432e.firebaseapp.com",
  projectId: "baat-chit-2432e",
  storageBucket: "baat-chit-2432e.appspot.com",
  messagingSenderId: "633860739920",
  appId: "1:633860739920:web:05b5c2bca1e84b0dee5255"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
 export const storage =getStorage()
 export const db = getFirestore()
 

  

