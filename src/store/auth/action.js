import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actiontype"


export const loginloading = ()=>{
    return {
        type : LOGIN_LOADING
    }
}

export const loginerror = ()=>{
    return {
        type : LOGIN_ERROR
    }
}

export const loginsuccess = (payload)=>{
    return {
        type : LOGIN_SUCCESS,
        payload
    }
}

export const logoutsuccess = ()=>{
    return {
        type : LOGOUT_SUCCESS
    }
}