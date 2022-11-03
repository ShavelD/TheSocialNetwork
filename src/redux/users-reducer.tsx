import React from "react";
import {ActionsTypes} from "./types";
import {UsersType} from "../components/Users/Users";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

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
export type setFolowingIsProgressActionType = ReturnType<typeof toogleFolowingIsProgress>

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_COUNT_USERS = 'SET-TOTAL-COUNT-USERS';
export const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';
export const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE-IS-FOLLOWING-PROGRESS';

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    folowingIsProgress: [],
}

export type InitialStateType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    folowingIsProgress: number[],
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
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                folowingIsProgress: action.isFetching
                    ? [...state.folowingIsProgress, action.userId]
                    : [...state.folowingIsProgress.filter(id => id != action.userId)]
            }
        }
        default:
            return state
    }
}


export const followSuccess = (userId: number): FollowActionType => (
    {type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number): unFollowActionType => (
    {type: UNFOLLOW, userId} as const)
export const setUsers = (users: UsersType[]): setUsersActionType => (
    {type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number): setCurrentActionType => (
    {type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number): setTotalCountActionType => (
    {type: SET_TOTAL_COUNT_USERS, count: totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean): setIsFetchingActionType => (
    {type: TOOGLE_IS_FETCHING, isFetching: isFetching} as const)
export const toogleFolowingIsProgress = (isFetching: boolean, userId: number) => (
    {type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)

export default usersReducer;

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

// export const onChangeThunkCreator = (pageNumber: number, pageSize: number) => {
//     return (dispatch: Dispatch) => {
//         dispatch(setCurrentPage(pageNumber))
//         dispatch(toggleIsFetching(true))
//         usersAPI.getUsers(pageNumber,pageSize).then(data => {
//             dispatch(toggleIsFetching(false))
//             dispatch(setUsers(data.items))
//         })
//     }
// }

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toogleFolowingIsProgress(true, userId))
        usersAPI.getFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                   dispatch(followSuccess(userId))
                }
                dispatch(toogleFolowingIsProgress(false, userId))
            })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toogleFolowingIsProgress(true,userId))
        usersAPI.deleteUnffolow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toogleFolowingIsProgress(false, userId))
            })
    }
}