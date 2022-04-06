// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmBi9XHLh6MU180baERW-RHtprKFQUPRQ",
    authDomain: "email-password-auth-bd68c.firebaseapp.com",
    projectId: "email-password-auth-bd68c",
    storageBucket: "email-password-auth-bd68c.appspot.com",
    messagingSenderId: "711780705317",
    appId: "1:711780705317:web:19b38ffbd3bff3c2c9cbcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;