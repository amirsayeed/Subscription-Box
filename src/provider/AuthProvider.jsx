import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const userInfo = {
        signUp,
        signIn,
        googleSignIn
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;