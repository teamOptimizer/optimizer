// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get } from 'firebase/database';
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
export const db = getDatabase();

export const createUser = (inputData) => {
  return createUserWithEmailAndPassword(auth, inputData.email, inputData.password);
}

export const addUserInDatabase = (userId, data) => {
  const userRef = ref(db, 'users/' + userId);
  set(userRef, data);
}

export const getUserDetails = async (userId) => {
  const userRef = ref(db, 'users/' + userId);
  const userDetails = await get(userRef, `users/${userId}`);
  if (userDetails.exists()) {
    return userDetails.val();
  } else {
    return {};
  }
  
}

export const handleUserLogin = (inputData) => {
  // auth.setPersistence(auth, auth.Auth.Persistence.LOCAL);
  return signInWithEmailAndPassword(auth, inputData.email, inputData.password)
}

export const logout = async () => {
  await signOut(auth);
}

export const checkIfUserLoggedIn = (setterFunction = () => {}) => {
  onAuthStateChanged(auth, async (user) => {
    if(user) {
      const userDetails = getUserDetails(user.uid);
      setterFunction({...userDetails, isLoggedIn: true });
    }
  })
}

export default firebaseApp;