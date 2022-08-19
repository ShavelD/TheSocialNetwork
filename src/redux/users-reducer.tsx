import React from "react";
import {
    ActionsTypes,
    FollowActionType,
    setUsersActionType,
    unFollowActionType,
    UsersPageType,
    UsersType
} from "./store";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: "",
            followed: false,
            fullName: "Dmitry Sh",
            status: "I am a boss",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 1,
            photoUrl: "",
            followed: true,
            fullName: "Alex Sm",
            status: "I am a boss",
            location: {city: "Moscow", country: "Russian"}
        },
        {
            id: 1,
            photoUrl: "",
            followed: false,
            fullName: "Andrey Sh",
            status: "I am a boss",
            location: {city: "London", country: "England"}
        },
    ]
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes) => {
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
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}


export const followCreator = (userId: number): FollowActionType => ({
    type: FOLLOW, userId
})
export const unfollowCreator = (userId: number): unFollowActionType => ({
    type: UNFOLLOW, userId
})
export const setUsersCreator = (users: UsersType[]): setUsersActionType => ({
    type: SET_USERS, users
})

export default usersReducer;