import * as ActionTypes from '../constants'
import Firebase, { db } from '../../config/firebase'

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
            dispatch(getUser(response.user.uid))
        } catch (e) {
            console.log(e)
        }
    }
}
export const getUser = uid => {
    return async (dispatch, getState) => {
        try {
            const user = await db
                .collection('users')
                .doc(uid)
                .get()
            dispatch({ type: ActionTypes.LOGIN, payload: user.data })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const register = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email
                }
                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)
                dispatch({ type: ActionTypes.REGISTER, payload: user })
            }

        } catch (e) {
            console.log(e)
        }
    }
}