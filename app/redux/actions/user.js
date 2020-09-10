import * as ActionTypes from '../constants'
import Firebase from '../../config/firebase'

export const updateEmail = email => {
    return {
        type: ActionTypes.UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: ActionTypes.UPDATE_PASSWORD,
        payload: password
    }
}

export const updateName = name => {
    return {
        type: ActionTypes.UPDATE_NAME,
        payload: name
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch({ type: ActionTypes.LOGIN, payload: response.user })
        } catch (e) {
            console.log(e)
        }
    }
}

export const register = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch({ type: ActionTypes.REGISTER, payload: response.user })
        } catch (e) {
            console.log(e)
        }
    }
}