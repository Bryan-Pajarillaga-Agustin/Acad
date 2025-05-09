import { deleteApp, initializeApp } from "firebase/app"
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_REACT_APP_FIREBASE_DATABASE_URL,
    projectId:import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
export const firebase = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
// Get a reference to the database service