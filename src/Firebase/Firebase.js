import { deleteApp, initializeApp } from "firebase/app"
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",
    authDomain: "to-do-list-9cf11.firebaseapp.com",
    databaseURL: "https://to-do-list-9cf11-default-rtdb.firebaseio.com",
    projectId: "to-do-list-9cf11",
    storageBucket: "to-do-list-9cf11.firebasestorage.app",
    messagingSenderId: "44862500438",
    appId: "1:44862500438:web:ccb0f012d9c8e7cfe215f7",
    measurementId: "G-HB8NT8L1FD"
};
// Initialize Firebase
export const firebase = initializeApp(firebaseConfig)
export const db = getDatabase()


// Get a reference to the database service