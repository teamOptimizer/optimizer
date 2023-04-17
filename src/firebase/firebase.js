// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEzwYJ63tzOGpga8iJCSBMRRze0ng-ZDA",
  authDomain: "optimizer-d4335.firebaseapp.com",
  projectId: "optimizer-d4335",
  storageBucket: "optimizer-d4335.appspot.com",
  messagingSenderId: "66897555544",
  appId: "1:66897555544:web:ffcacdb7a3e95be53c5a2d",
  measurementId: "G-YF01QBS664"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const createUser = (inputData) => {
  return createUserWithEmailAndPassword(auth, inputData.email, inputData.password);
}

export const handleUserLogin = (inputData) => {
  // auth.setPersistence(auth, auth.Auth.Persistence.LOCAL);
  return signInWithEmailAndPassword(inputData.email, inputData.password)
}

export default firebaseApp;