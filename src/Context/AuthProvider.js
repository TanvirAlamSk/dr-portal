import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../firebase/firebase.config';
import { set } from 'date-fns';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState({})
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const emailpasssignup = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailpasswordlogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserInfo = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const loginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoader(true);
        signOut(auth)
            .then(() => {
                alert("Logout Success")
            })
            .catch((error) => alert(error))
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setLoginUser(currentUser);
            setLoader(false)
        })
        return () => unSubscriber()
    }, [])

    const authInfo = {
        emailpasssignup, emailpasswordlogin, logout,
        loginWithGoogle, loginUser, loader, setLoginUser,
        updateUserInfo
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;