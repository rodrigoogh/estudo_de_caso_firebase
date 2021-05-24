import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "XXXXXXX",
    authDomain: "XXXXXXX",
    projectId: "XXXXXXX",
    storageBucket: "XXXXXXX",
    messagingSenderId: "XXXXXXX",
    appId: "XXXXXXX"
};

let app = firebase.apps.length === 0 ? firebase.initializeApp(firebaseConfig) : firebase.app();

const database = app.firestore();

const auth = firebase.auth();

export { database, auth };