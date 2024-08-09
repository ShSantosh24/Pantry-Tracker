// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACNrNyU9wN8oHq1kt1p_cxEsTGdZkfT1g",
  authDomain: "pantry-tracker-b0f4f.firebaseapp.com",
  projectId: "pantry-tracker-b0f4f",
  storageBucket: "pantry-tracker-b0f4f.appspot.com",
  messagingSenderId: "509564802525",
  appId: "1:509564802525:web:2323f44ac4a1b3f5281234",
  measurementId: "G-HLY3V9RGMC"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore=getFirestore(app);