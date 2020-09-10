import * as ActionTypes from './constants'
import { combineReducers } from 'redux'

const user = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return action.payload
        case ActionTypes.REGISTER:
            return action.payload
        case ActionTypes.UPDATE_NAME:
            return { ...state, name: action.payload }
        case ActionTypes.UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case ActionTypes.UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state
    }
}

const Reducer = combineReducers({ user })
export default Reducer