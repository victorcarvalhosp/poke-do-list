import * as firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/performance';
import 'firebase/functions';


firebase.initializeApp({
    /* add your config object from the Firebase console */
    apiKey: "AIzaSyCnbymWzGiu1WJD4MuNp4ffCMIJtoSvpQo",
    authDomain: "poke-do.firebaseapp.com",
    databaseURL: "https://poke-do.firebaseio.com",
    projectId: "poke-do",
    storageBucket: "poke-do.appspot.com",
    messagingSenderId: "599356139956",
    appId: "1:599356139956:web:0e96f8500405c7bad86ae1",
    measurementId: "G-BC43CFXC3E"
});

export default firebase;
export const analytics = firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const performance = firebase.performance();
export const functions = firebase.functions();
// functions.useFunctionsEmulator('http://localhost:5000');

