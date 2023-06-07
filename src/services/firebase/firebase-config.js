// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBubzx_W1apkSlyP_S0ERgjzQWxxPGBuFQ",
  authDomain: "parking-system-eaece.firebaseapp.com",
  projectId: "parking-system-eaece",
  storageBucket: "parking-system-eaece.appspot.com",
  messagingSenderId: "46243115381",
  appId: "1:46243115381:web:0ac20d814bfe7e356b233c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//access our db
export const db = getFirestore(app);
