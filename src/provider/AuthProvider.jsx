/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const googleRegister = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };
    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    };
    const myProfileUpdate = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authObject = {
        googleRegister,
        userLogout,
        myProfileUpdate,
        user,
        setUser,
        loading,
        setLoading,
    };
    console.log(user);
    return (
        <AuthContext.Provider value={authObject}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
