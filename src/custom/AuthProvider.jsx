import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const AuthInfo = {
        googleSignIn
    }

    return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;