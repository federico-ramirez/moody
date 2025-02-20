'use client'
import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useContext, useState, useEffect } from "react"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currUser, setCurrUser] = useState(null);
    const [userDataObj, setDataObj] = useState({});
    const [loading, setLoading] = useState(true);

    function signUp() {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login() {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        setDataObj({})
        return signOut(auth)
    }


    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, async user => {
            try {
                setLoading(true)
                setCurrUser(user)

                if (!user)
                    return

                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)

                let firebaseData = {}
                if (docSnap.exists()) {
                    firebaseData = docSnap.data()
                }
                setDataObj(firebaseData)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })
        return unsuscribe
    }, [])

    const value = {
        currUser,
        userDataObj,
        signUp,
        logOut,
        login,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}