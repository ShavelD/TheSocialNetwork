import React from "react";
import {ActionsTypes} from "./types";
import {UsersType} from "../components/Users/Users";

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

export type setCurrentActionType = {
    type: 'SET-CURRENT-PAGE',
    currentPage: number
}

export type setTotalCountActionType = {
    type: 'SET-TOTAL-COUNT-USERS',
    count: number
}
export type setIsFetchingActionType = {
    type: 'TOOGLE-IS-FETCHING',
    isFetching: boolean
}

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_COUNT_USERS = 'SET-TOTAL-COUNT-USERS';
export const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export type InitialStateType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
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
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT_USERS: {
            return {...state, totalUsersCount: action.count}
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
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
    {type: SET_USERS, users} as const)
export const setCurrentPageCreator = (currentPage: number): setCurrentActionType => (
    {type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountCreator = (totalUsersCount: number): setTotalCountActionType => (
    {type: SET_TOTAL_COUNT_USERS, count: totalUsersCount} as const)
export const toggleIsFetchingCreator = (isFetching: boolean): setIsFetchingActionType => (
    {type: TOOGLE_IS_FETCHING, isFetching: isFetching} as const)

export default usersReducer;