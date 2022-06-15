import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from "firebase/database";
import { push, off, onValue, remove, update, set, get, child } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtFrYEtK6ka8OXWmVS3YoSPnTcMfEmp8E",
  authDomain: "expensify-205e7.firebaseapp.com",
  databaseURL: "https://expensify-205e7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-205e7",
  storageBucket: "expensify-205e7.appspot.com",
  messagingSenderId: "442850532949",
  appId: "1:442850532949:web:57b9f6d15c0d27cf563edc",
  measurementId: "G-F3FQ5FW74E"
};

const googleAuthProvider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);

const db = getDatabase()
const dbRef = ref(db);

export { app, dbRef, googleAuthProvider, db }
