// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/database';


// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx",
    databaseURL: "xxxx",
    projectId: "xxxx",
    storageBucket: "xxxx",
    messagingSenderId: "xxxx",
    appId: "xxxx"
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
