import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState({})
    const [loader, setLoader] = useState({})
    const googleProvider = new GoogleAuthProvider();

    const emailpasssignup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailpasswordlogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                alert("Logout Success")
            })
            .catch((error) => alert(error))
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setLoginUser(currentUser)
        })
        return () => unSubscriber()
    }, [])

    const authInfo = { emailpasssignup, emailpasswordlogin, logout, loginWithGoogle, loginUser, setLoginUser, updateUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;