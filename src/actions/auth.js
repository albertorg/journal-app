import { types } from '../types/types'


export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })

    export const startLogin = (email, password) => {
        return (dispatch) => {
            setTimeout(() => {
                dispatch( login(123, 'Pedro'))
            }, 3500);
        }
    } 