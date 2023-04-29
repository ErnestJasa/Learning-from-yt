// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCflF0FWWovsZBm5zSIO0soQ6US5QZLEAk",
    authDomain: "auth-tutorial-26434.firebaseapp.com",
    projectId: "auth-tutorial-26434",
    storageBucket: "auth-tutorial-26434.appspot.com",
    messagingSenderId: "762033363653",
    appId: "1:762033363653:web:c9b47829f177f2a5cd6eac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app