import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB6Iy8aNj6Pegl0BVK09PgbQOVfig8YABI",
    authDomain: "site-investnamente.firebaseapp.com",
    projectId: "site-investnamente",
    storageBucket: "site-investnamente.appspot.com",
    messagingSenderId: "1089566588373",
    appId: "1:1089566588373:web:3fb70a971f2e6a6037515c"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider();