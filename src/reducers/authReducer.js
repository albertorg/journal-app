import { types } from "../types/types";

/*
    state will be empty when are not user logged
    adn when an user is logged :

    {
        uid: jkgsdjfjkdhhfsjdf
        name: 'Alberto'
    }

*/


export const authReducer = ( state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
            
        case types.logout: 
            return { }
    
        default:
            return state
    }
}