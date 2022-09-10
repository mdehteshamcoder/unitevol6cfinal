import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actiontype";

const init = {
    loading: false,
    error: false,
    token: null
}

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
                error : false
            }

        case LOGIN_ERROR:
            return {
                ...state,
                error: true,
                loading : false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                token: payload
            }

            case LOGOUT_SUCCESS : 
            return init;



        default:
            return {
                ...state
            }
    }
}