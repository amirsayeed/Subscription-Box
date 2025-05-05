import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC1WcUpHg9IE9o7UW-uuPj-t5PrKBkGCZ4",
    authDomain: "subscription-box-edd92.firebaseapp.com",
    projectId: "subscription-box-edd92",
    storageBucket: "subscription-box-edd92.firebasestorage.app",
    messagingSenderId: "199728064896",
    appId: "1:199728064896:web:ab9c2b8f90aff40668f965"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);