"use client";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDO-lQYp8HuJS-oKgYkPIdQsYR1APgmuMA",
  authDomain: "tutorial-2-17b0a.firebaseapp.com",
  projectId: "tutorial-2-17b0a",
  storageBucket: "tutorial-2-17b0a.firebasestorage.app",
  messagingSenderId: "875902380259",
  appId: "1:875902380259:web:3936c80a15c5c7cbd83dd6",
  measurementId: "G-KCDDEXYN27",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
