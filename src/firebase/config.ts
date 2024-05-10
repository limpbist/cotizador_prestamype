import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyjp2kb4sQC8Xk7wBwYNuu-d7tpcYSIEU",
    authDomain: "prestamype-d641c.firebaseapp.com",
    projectId: "prestamype-d641c",
    storageBucket: "prestamype-d641c.appspot.com",
    messagingSenderId: "848225687874",
    appId: "1:848225687874:web:0d02b004693158e33c50db"
};

const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase);