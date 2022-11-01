// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApzIzPPXXlicSmKzWTzxMhihfylqu1KYA",
    authDomain: "chatcloud-57209.firebaseapp.com",
    projectId: "chatcloud-57209",
    storageBucket: "chatcloud-57209.appspot.com",
    messagingSenderId: "522390484333",
    appId: "1:522390484333:web:08d79d4e540214d0711664"
};

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSING_SENDER_ID,
//     appId: process.env.APP_ID
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;