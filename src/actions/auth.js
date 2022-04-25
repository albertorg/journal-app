import { types } from '../types/types'
import {googleAuthProvider} from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { finishLoadingAction, startLoadingAction } from './ui'
import Swal from 'sweetalert2'



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
            dispatch(startLoadingAction())

            signInWithEmailAndPassword(auth, email, password)
                .then(({user}) => {
                    dispatch(login(user.uid, user.displayName))
                    dispatch(finishLoadingAction())
                })
                .catch(e => {
                    console.log(e)
                    dispatch(finishLoadingAction())
                    Swal.fire('Error', e.code, 'error')
                })
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
                    Swal.fire('Error', e.code, 'error')
                })
        }
    }

    export const startLogout = () => {
        return async(dispatch) => {
            await signOut(auth)
            dispatch( logout())
        }
    }

    export const logout =  () => (
        {
            type: types.logout
        }
    )