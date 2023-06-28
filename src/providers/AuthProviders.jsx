import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

// 1. crate context
export const AuthContext = createContext(null);


const auth = getAuth(app);


const AuthProviders = ({ children }) => {
    const [user, setUser ] = useState(null);


    // for register user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for login user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    } 
    


    const authInfo = {
        user, 
        createUser,
        signIn
    }



// const user = {displayName: 'arman hossain somoy'}

    return (
    <AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>);
};

export default AuthProviders;
