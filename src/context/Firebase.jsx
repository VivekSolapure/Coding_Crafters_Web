import { createContext, useContext } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getDatabase, set, ref, get, } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import firebase from "firebase/compat/app"
import 'firebase/compat/database'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_OjEX0bQ1G98oUjPsf4VSW2rDk3rbd9E",
    authDomain: "codingcrafters-fac21.firebaseapp.com",
    databaseURL: "https://codingcrafters-fac21-default-rtdb.firebaseio.com",
    projectId: "codingcrafters-fac21",
    storageBucket: "codingcrafters-fac21.appspot.com",
    messagingSenderId: "193742457678",
    appId: "1:193742457678:web:171d39cbb568d511f42c1f",
    measurementId: "G-NCR7PYBVNT"
  };



const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();


const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)
export const storage = getStorage();


export const FirebaseProvider = (props) => {


    const signupUserWithEamilandPassword = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password).then(() => {
                return (alert("Success!!"));
            })

        } catch (error) {
            console.error("Error: ", error);
        }
    }
    const signUpWithGoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider)
    }

    const LogInWithEmailAndPassword = async (eemail, ppassword) => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, eemail, ppassword)
                .then(value => (console.log("Login Sucess")))
        } catch (error) {
            console.log(console.error(error))
        }
    }


    const putData = (key, data) => set(ref(database, key), (data))




    return (
        <FirebaseContext.Provider value={{ signupUserWithEamilandPassword, putData, signUpWithGoogle, LogInWithEmailAndPassword, database, storage }}>{props.children}</FirebaseContext.Provider>
    )



}


