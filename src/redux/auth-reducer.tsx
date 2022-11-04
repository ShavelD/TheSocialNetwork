import React from "react";
import {ActionsTypes} from "./types";
import {Dispatch} from "redux";
import {AuthMe, usersAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

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

export const getAuthUserData = () => (dispatch: Dispatch) => {
    AuthMe.getAuthMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}


export default authReducer;