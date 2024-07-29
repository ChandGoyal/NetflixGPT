// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyaVvF6FcOJbTeIXd-PPxNVAavOOAB_WQ",
  authDomain: "netflix-gpt-11f99.firebaseapp.com",
  projectId: "netflix-gpt-11f99",
  storageBucket: "netflix-gpt-11f99.appspot.com",
  messagingSenderId: "206321989470",
  appId: "1:206321989470:web:6f56d50ad53f41e1c201cf",
  measurementId: "G-H6KZTJRD3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
