import firebase from "firebase/app";
import "firebase/firestore";

//* as

// Agregar configuración firebase:
var firebaseConfig = {
    apiKey: "AIzaSyBuXbkotKpxOq5NLSYao6lqvxc0UB8Z9HQ",
    authDomain: "quasar-vue-dos.firebaseapp.com",
    databaseURL: "https://quasar-vue-dos.firebaseio.com",
    projectId: "quasar-vue-dos",
    storageBucket: "quasar-vue-dos.appspot.com",
    messagingSenderId: "289941645996",
    appId: "1:289941645996:web:8b7902c5f033d836fecd09"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };