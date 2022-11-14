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
    id: 2,
    email: '',
    login: '',
    isAuth: false,
    isLoggedIn: false
}

export type InitialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,
    isLoggedIn: boolean
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "IS-LOGGED-IN":
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        default:
            return state
    }
}
export const setIsLoggedInAC = (isLoggedIn:boolean) => ({type:'IS-LOGGED-IN', isLoggedIn} as const)

export const setAuthUserData = (id: number, email: string, login: string) => (
    {type: 'SET-USER-DATA', data: {id, email, login}} as const)


export const getAuthUserData = () => (dispatch: Dispatch) => {
    AuthMe.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login))
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

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>


export default authReducer;