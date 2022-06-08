import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyChGyk--7dsbcBcEkFodGXT7degGHlNoME",
    authDomain: "orla-app-a794c.firebaseapp.com",
    projectId: "orla-app-a794c",
    storageBucket: "orla-app-a794c.appspot.com",
    messagingSenderId: "1096455165709",
    appId: "1:1096455165709:web:97b82b6fd9110927014244",
    measurementId: "G-1M9XT0D58R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getAlumnos(db) {
    const alumnosCol = collection(db, 'alumnos');
    const alumnoSnapshot = await getDocs(alumnosCol);
    const alumnoList = alumnoSnapshot.docs.map(doc => doc.data());
    console.log(alumnoList)
    return alumnoList;
}