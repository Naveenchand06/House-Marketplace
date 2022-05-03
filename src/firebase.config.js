// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoyNgqn-hP61G5niwDIIPktswDWQRhlSs",
  authDomain: "house-marketplace-1a04d.firebaseapp.com",
  projectId: "house-marketplace-1a04d",
  storageBucket: "house-marketplace-1a04d.appspot.com",
  messagingSenderId: "731714697412",
  appId: "1:731714697412:web:907f2cd68a6c9266a93191",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
