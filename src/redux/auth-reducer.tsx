import React from "react";
import { Dispatch} from "redux";
import {AuthMe, LoginParamsType, Result_Code} from "../api/api";
import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";

export type  setUserDataActionType = ReturnType<typeof setAuthUserData>
export type AuthActionsType =  setUserDataActionType | setIsLoggedActionType
export type setIsLoggedActionType = ReturnType<typeof setIsLoggedInAC>

const initialState: InitialStateType = {
    id: '',
    email: '',
    login: '',
    isLoggedIn: false
}

export type InitialStateType = {
    id: string,
    email: string,
    login: string,
    isLoggedIn: boolean
}

type ActionsType = ReturnType<typeof setIsLoggedInAC> | SetAppStatusActionType | SetAppErrorActionType | setUserDataActionType


const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data
            }
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        default:
            return state
    }
}

export const setAuthUserData = (id: string, email: string, login: string) => (
    {type: 'SET-USER-DATA', data: {id, email, login,}} as const)

export const setIsLoggedInAC = (isLoggedIn: boolean) => ({type:'login/SET-IS-LOGGED-IN', isLoggedIn} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    AuthMe.me().then(response => {
        debugger
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login))
            dispatch(setIsLoggedInAC(true))
        }
    })
}

export const loginTC = (data: LoginParamsType) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const response = await AuthMe.login(data)
        if (response.data.resultCode === Result_Code.OK) {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(response.data, dispatch)
        }
    }
    catch (error) {
        handleServerNetworkError(error as {message: string}, dispatch)
    }

}

export const logOutTC = () => (dispatch: Dispatch) => {
    AuthMe.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
            }
        })
}




// export const setIsLoggedInTC = (data: LoginParamsType): ThunkType => (dispatch) => {
//     AuthMe.login(data)
//         .then((res)=>{
//             if (res.data.resultCode === 0){
//                 dispatch(setIsLoggedInAC(true))
//             }
//         })
// }
//
//
// export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>


export default authReducer;