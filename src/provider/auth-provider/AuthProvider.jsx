/* eslint-disable react/prop-types */
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        user,
        setUser,
        loading,
        googleLogin,
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userCredential) => {
            if (userCredential) {
                setUser(userCredential)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
        })
        return () => unsubscribe()
    }, [])
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;