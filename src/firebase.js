import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";

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

const signup = async (name, email, password) => {
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
       });
    }
    catch (error){
        console.log(error);
        alert(error);
    }
}

const login = async () => {
    try{
        signInWithEmailAndPassword(auth, email, password);
    }
    catch(error) {
        console.log(error);
        alert(error);
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};