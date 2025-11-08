import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEy6YUeAvjOmRARvTRdfGeL8RJDzs8U7A",
    authDomain: "netflix-clone-d1fa8.firebaseapp.com",
    projectId: "netflix-clone-d1fa8",
    storageBucket: "netflix-clone-d1fa8.appspot.com",
    messagingSenderId: "1080602120235",
    appId: "1:1080602120235:web:29e7c05415df6c1cd65a6e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);