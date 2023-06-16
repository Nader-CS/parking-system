import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBubzx_W1apkSlyP_S0ERgjzQWxxPGBuFQ",
  authDomain: "parking-system-eaece.firebaseapp.com",
  projectId: "parking-system-eaece",
  storageBucket: "parking-system-eaece.appspot.com",
  messagingSenderId: "46243115381",
  appId: "1:46243115381:web:0ac20d814bfe7e356b233c",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
export { db }
export { auth };
