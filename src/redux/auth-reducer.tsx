import React from "react";
import {ActionsTypes} from "./types";
import {AnyAction, Dispatch} from "redux";
import {AuthMe, LoginParamsType} from "../api/api";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

export type  setUserDataActionType = ReturnType<typeof setAuthUserData>

export type setIsLoggedActionType = ReturnType<typeof setIsLoggedInAC>

export type AuthActionsType =  setUserDataActionType | setIsLoggedActionType



const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type InitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
            }
        case "IS-LOGGED-IN":
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}
export const setIsLoggedInAC = (isAuth:boolean) => ({type:'IS-LOGGED-IN', isAuth} as const)

export const setAuthUserData = (id: number, email: string, login: string) => (
    {type: 'SET-USER-DATA', data: {id, email, login}} as const)


export const getAuthUserData = () => (dispatch: Dispatch) => {
    AuthMe.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login))
            dispatch(setIsLoggedInAC(true))
        }
    })
}

export const setIsLoggedInTC = (data: LoginParamsType): ThunkType => (dispatch) => {
    debugger
    AuthMe.login(data)
        .then((res)=>{
            if (res.data.resultCode === 0){
                dispatch(setIsLoggedInAC(true))
            }
        })
}

// export const setIsLoggedOutTC = (): ThunkType => (dispatch) => {
//     debugger
//     AuthMe.logout()
//         .then((res)=>{
//             if (res.data.resultCode === 0){
//                 dispatch(setAuthUserData(null, null, null))
//             }
//         })
// }

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>


export default authReducer;