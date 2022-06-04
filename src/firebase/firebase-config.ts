import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtp71BD2xt0M7Kc7ftugaYOY2Fgreq3A8",
    authDomain: "notes-app-ab1ee.firebaseapp.com",
    databaseURL: "https://notes-app-ab1ee-default-rtdb.firebaseio.com",
    projectId: "notes-app-ab1ee",
    storageBucket: "notes-app-ab1ee.appspot.com",
    messagingSenderId: "158272833521",
    appId: "1:158272833521:web:e8acf6c105d698bcaba650"
};
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const gogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {db, gogleAuthProvider, firebase}