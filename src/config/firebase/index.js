import { initializeApp, getApps } from "firebase/app";
import "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD10cbecAcQa6RavJhkjYJCxLDMAXmRKPw",
  authDomain: "wabot-c09d1.firebaseapp.com",
  databaseURL:
    "https://wabot-c09d1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wabot-c09d1",
  storageBucket: "wabot-c09d1.appspot.com",
  messagingSenderId: "716554312528",
  appId: "1:716554312528:web:c81a4b039cfbcc09c46a55",
  measurementId: "G-8WDG026E3M",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const FirebaseAuth = getAuth();

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password);
};

export const SignIn = async (email, password) => {
  return await signInWithEmailAndPassword(FirebaseAuth, email, password);
};

export const SignOut = async () => {
  await signOut(FirebaseAuth);
};

export const database = getDatabase();
