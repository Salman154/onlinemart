// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHwsSZRxu2eCoWooFFKXYdaR8Ksyj37nc",
  authDomain: "samimart-968a0.firebaseapp.com",
  projectId: "samimart-968a0",
  storageBucket: "samimart-968a0.appspot.com",
  messagingSenderId: "96010161574",
  appId: "1:96010161574:web:1301fb3d47f70f178a5367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;