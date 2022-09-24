import React from "react";
import {ActionsTypes} from "./types";

export const SET_USER_DATA = 'SET-USER-DATA';

export type setUserDataActionType = {
    type: 'SET-USER-DATA',
    data: authDataPropsType
}

export type authDataPropsType ={
    id: number,
    email: string,
    login: string
}

const initialState: InitialStateType = {
    id: 2,
    email: '',
    login: '',
    isAuth: false
}

export type InitialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUserData = (id: number, email: string, login: string): setUserDataActionType => (
    {type: SET_USER_DATA, data: {id,email,login}} as const)

export default authReducer;