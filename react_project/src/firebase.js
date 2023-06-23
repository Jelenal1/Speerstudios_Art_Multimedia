// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr3izpDKRc4bvnxfQXxGHqZRnXkZ8Yi3E",
    authDomain: "speerstudios-eb0cf.firebaseapp.com",
    projectId: "speerstudios-eb0cf",
    storageBucket: "speerstudios-eb0cf.appspot.com",
    messagingSenderId: "212542624282",
    appId: "1:212542624282:web:602d3be36e2b35838937a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);