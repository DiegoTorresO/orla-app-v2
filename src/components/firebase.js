// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChGyk--7dsbcBcEkFodGXT7degGHlNoME",
  authDomain: "orla-app-a794c.firebaseapp.com",
  projectId: "orla-app-a794c",
  storageBucket: "orla-app-a794c.appspot.com",
  messagingSenderId: "1096455165709",
  appId: "1:1096455165709:web:97b82b6fd9110927014244",
  measurementId: "G-1M9XT0D58R",
  databaseURL: "https://orla-app-a794c-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default firebaseConfig;