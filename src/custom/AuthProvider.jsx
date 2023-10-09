import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.config';
import { json } from 'react-router-dom';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading,setLoading]=useState(true)
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signUp = (email, password, displayName, photoURL) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return (() => {
             unSubscribe();
        })
    }, []);

    const logOut = () => {
        return signOut(auth)
    }

    const AuthInfo = {
        googleSignIn,
        signUp,
        signIn,
        user,
        logOut,
        loading,
    }

    return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;