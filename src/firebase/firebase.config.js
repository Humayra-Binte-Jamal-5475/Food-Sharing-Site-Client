// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration using Vite environment variables
const firebaseConfig = {
  apiKey: "AIzaSyCtlViJgUai4NiehFE9efrT5WRwwVXhQk8",
  authDomain: "food-loop-90e05.firebaseapp.com",
  projectId: "food-loop-90e05",
  storageBucket: "food-loop-90e05.firebasestorage.app",
  messagingSenderId: "312131085797",
  appId: "1:312131085797:web:862c494baa736989e47b0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;