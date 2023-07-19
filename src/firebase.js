// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/database';


// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwDd0LzxFwMOsQN6x9y_gpB6kKDhbc6_w",
    authDomain: "notes-wall-952d7.firebaseapp.com",
    databaseURL: "https://notes-wall-952d7-default-rtdb.firebaseio.com",
    projectId: "notes-wall-952d7",
    storageBucket: "notes-wall-952d7.appspot.com",
    messagingSenderId: "41656746286",
    appId: "1:41656746286:web:4cf91bc65691d70d32fabf"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();

export default database;
// export function addNotes(formData) {
//     set(ref(database, 'notes/'), {
//         formData
//     })
// }
// export function
