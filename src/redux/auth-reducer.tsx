import React from "react";
import { Dispatch} from "redux";
import {AuthMe} from "../api/api";
import {setIsLoggedInAC} from "./authMe-reducer";

export type  setUserDataActionType = ReturnType<typeof setAuthUserData>

// export type setIsLoggedActionType = ReturnType<typeof setIsLoggedInAC>

export type AuthActionsType =  setUserDataActionType
    // | setIsLoggedActionType



const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false
}
// export type InitialStateType = typeof initialState

export type InitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isLoggedIn: boolean
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isLoggedIn: true
            }
        // case "IS-LOGGED-IN":
        //     return {
        //         ...state,
        //         isLoggedIn: action.value
        //     }
        default:
            return state
    }
}
// export const setIsLoggedInAC = (value :boolean) => ({type:'IS-LOGGED-IN', value} as const)

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