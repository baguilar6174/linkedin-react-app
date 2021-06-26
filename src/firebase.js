import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database

// const firebaseConfig = {
//     apiKey: "your-api-key",
//     authDomain: "your-auth-domain",
//     projectId: "your-proyect-id",
//     storageBucket: "your-storage-bucket",
//     messagingSenderId: "your-messaging-sender-id",
//     appId: "your-app-id"
// };

const firebaseConfig = {
    apiKey: "AIzaSyAqFL-y-zl7oem_YYxl1_fkLt_CkErDFSY",
    authDomain: "linkedin-clone-f42ed.firebaseapp.com",
    projectId: "linkedin-clone-f42ed",
    storageBucket: "linkedin-clone-f42ed.appspot.com",
    messagingSenderId: "55139261463",
    appId: "1:55139261463:web:1b33d87a1598100b7e1052"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
