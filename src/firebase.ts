import * as firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/performance';
import 'firebase/functions';


firebase.initializeApp({
    /* add your config object from the Firebase console */
    apiKey: "AIzaSyATBenIrSGYIl722anLxNF4Q1aKSoG16Nw",
    authDomain: "poke-do-list.firebaseapp.com",
    databaseURL: "https://poke-do-list.firebaseio.com",
    projectId: "poke-do-list",
    storageBucket: "poke-do-list.appspot.com",
    messagingSenderId: "55233007709",
    appId: "1:55233007709:web:749addc59f4f6947ddfdb4",
    measurementId: "G-Y9VDW23221"
});

export default firebase;
export const analytics = firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const performance = firebase.performance();
export const functions = firebase.functions();
// functions.useFunctionsEmulator('http://localhost:5000');

