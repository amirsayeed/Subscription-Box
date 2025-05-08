import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState('');
    
    const signUp = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateDetails = (updatedInfo) =>{
        return updateProfile(auth.currentUser, updatedInfo);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const forgetPassword = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const userInfo = {
        signUp,
        signIn,
        googleSignIn,
        user,
        setUser,
        logOut,
        updateDetails,
        loading,
        forgetPassword
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;