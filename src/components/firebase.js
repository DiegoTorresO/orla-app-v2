






// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6UWLwaaEcPg3XjmyWvvwXJbjMUL2N8fE",
  authDomain: "orla-app-v2.firebaseapp.com",
  databaseURL: "https://orla-app-v2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "orla-app-v2",
  storageBucket: "orla-app-v2.appspot.com",
  messagingSenderId: "1072796015289",
  appId: "1:1072796015289:web:ba5562960ca16cd5f0d968",
  measurementId: "G-VNF8F8BXJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default firebaseConfig;








