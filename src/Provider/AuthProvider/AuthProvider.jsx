import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({displayName: 'alamin'});


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

    const authInfo = {
        user,
        createUser,
        signInUser,
        createUserWithGoogle,
        createUserWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;