import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { add_user, sign_out, user_info } from "../redux/features/auth-slice";
import Router from "next/router";
import { firebaseInitialization } from '../firebase/firebase';

// initialize firebase app
firebaseInitialization();

// declare auth
const auth = getAuth();

const provider = new GoogleAuthProvider();

const useFirebase = () => {
    // dispatch
    const dispatch = useDispatch();
    // register With Email Password
    const registerWithEmailPassword = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                updateProfile(auth.currentUser, {
                        displayName: name,
                    })
                    .then(() => {})
                    .catch((error) => {});
                dispatch(
                    add_user({
                        name: name,
                        email: user.user.email,
                        uid: user.user.uid,
                    })
                );
                toast.success(`${name} register successfully`, {
                    position: "top-left",
                });
            })
            .catch((error) => {
                const errorMessage = error ? .message;
                toast.error(`${errorMessage}`, {
                    position: "top-left",
                });
            });
    };

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...

                dispatch(
                    add_user({
                        name: user.displayName,
                        email: user.email,
                        idParte: "",
                        uid: user.accessToken,
                    })
                );
                toast.success(`Registro completado`, {
                    position: "top-left",
                });
                Router.push("/");
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    // login with email and password
    const loginWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const { displayName: name, email, uid } = user.user;
                dispatch(
                    user_info({
                        name: name,
                        email: email,
                        uid: uid,
                    })
                );
                toast.success(`${name} login successfully`, {
                    position: "top-left",
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(`${errorMessage}`, {
                    position: "top-left",
                });
            });
    };

    // password reset email sent
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success(`Password reset email sent!`, {
                    position: "top-left",
                });
            })
            .catch((error) => {
                const errorMessage = error ? .message;
                toast.error(`${errorMessage}`, {
                    position: "top-left",
                });
            });
    };

    // logout
    const logout = () => {
        signOut(auth)
            .then(() => {
                dispatch(sign_out());
                toast.success(`Sign-out successful.`, {
                    position: "top-left",
                });
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return {
        registerWithEmailPassword,
        loginWithEmailPassword,
        resetPassword,
        logout,
        loginWithGoogle,
    };
};

export default useFirebase;