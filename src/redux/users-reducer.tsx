import React from "react";
import {UsersType} from "../components/Users/Users";
import {ActionsTypes} from "./types";

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type FollowActionType = {
    type: 'FOLLOW',
    userId: number
}

export type unFollowActionType = {
    type: 'UNFOLLOW',
    userId: number
}

export type setUsersActionType = {
    type: 'SET-USERS',
    users: UsersType[]
}

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';

const initialState: InitialStateType = {
    users: []
}

export type InitialStateType = {
    users: UsersType[]
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        default:
            return state
    }
}


export const followCreator = (userId: number): FollowActionType => (
    {type: FOLLOW, userId} as const)
export const unfollowCreator = (userId: number): unFollowActionType => (
    {type: UNFOLLOW, userId} as const)
export const setUsersCreator = (users: UsersType[]): setUsersActionType => (
    {type: SET_USERS, users} as const
)

export default usersReducer;