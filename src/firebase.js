import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvnIG68g3K81VgSXLqVN1pkobp8ZiRcxc",
  authDomain: "task-management-cf114.firebaseapp.com",
  projectId: "task-management-cf114",
  storageBucket: "task-management-cf114.appspot.com",
  messagingSenderId: "188518687384",
  appId: "1:188518687384:web:d0f82ca9a33992eb7e66ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//initialize services

export const db = getFirestore(app);

export const storeData = async (title, description) => {
  try {
    await addDoc(collection(db, "todo"), {
      title,
      description,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
