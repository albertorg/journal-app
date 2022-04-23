import { types } from '../types/types'
import {googleAuthProvider} from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth";

const auth = getAuth()

export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })

    export const startGoogleLogin = () => {
        return (dispatch) => {
            signInWithPopup(auth, googleAuthProvider)
                .then( ({user}) => {
                    dispatch(
                        login(user.uid, user.displayName)
                    )
                })
        }
    }

    export const startLogin = (email, password) => {
        return (dispatch) => {
            setTimeout(() => {
                dispatch( login(123, 'Pedro'))
            }, 3500);
        }
    } 

    export const StartRegisterWithEmail = (email, password, name) => {
        return (dispatch) => {
            createUserWithEmailAndPassword(auth, email, password)
                .then( async({ user }) => {
                    await updateProfile(user, {displayName: name})

                    dispatch(
                        login(user.uid, user.displayName)
                    )
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }