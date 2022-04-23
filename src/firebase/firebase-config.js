// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLcu2o8UUrZSh0tV8w_uXKsPQcRK3jFtk",
    authDomain: "journal-app-d53c8.firebaseapp.com",
    projectId: "journal-app-d53c8",
    storageBucket: "journal-app-d53c8.appspot.com",
    messagingSenderId: "95977067165",
    appId: "1:95977067165:web:41e9fd58b5f9b3ef48fa74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const googleAuthProvider = new GoogleAuthProvider();




