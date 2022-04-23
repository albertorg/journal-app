import { types } from '../types/types'
import {googleAuthProvider} from '../firebase/firebase-config'
import { getAuth, signInWithPopup } from "firebase/auth";


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
            const auth = getAuth()
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