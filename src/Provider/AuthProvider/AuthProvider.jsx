import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/Firebase.config";



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createUserWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const logOutUser = () => {
        return signOut(auth)
    }

    const profileUpdate = (loggedUser, name, photoUrl) => {
        return updateProfile(loggedUser, {
            displayName: name, 
            photoURL: photoUrl
        })
        .then()
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        createUserWithGoogle,
        createUserWithGithub,
        logOutUser,
        profileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;