
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-7b05e.firebaseapp.com",
  projectId: "reactchat-7b05e",
  storageBucket: "reactchat-7b05e.firebasestorage.app",
  messagingSenderId: "356344050474",
  appId: "1:356344050474:web:313eb3fd78d3fda1a4a453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()