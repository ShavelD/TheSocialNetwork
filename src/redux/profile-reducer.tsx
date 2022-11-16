import React from "react";
import {ActionsTypes} from "./types";
import {ProfileType} from "../components/Profile/Profile";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
}

export type SetUserStatusType = ReturnType<typeof getUserStatusAC>

export type updateUserStatusType = ReturnType<typeof updateUserStatusAC>

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    profile: ProfileType
    status: string
}

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET-USER-PROFILE';
export const SET_USER_STATUS = 'SET-USER-STATUS';
export const UPDATE_USER_STATUS = 'UPDATE-USER-STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 6},
        {id: 2, message: "It's my first post", likesCount: 10}
    ],
    // newPostText: '',
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 1,
        photos: {
            small: '',
            large: '',
        },
    },
    status: '',
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let message = action.newPostText
            return {...state, posts: [{id: 5, message: message, likesCount: 10}, ...state.posts,]}
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state

    }
}

export const AddPostCreator = (newPostText: string): AddPostActionType => ({
        type: ADD_POST, newPostText
    } as const
)

export const updateNewPostTextCreator = (text: string): UpdateNewPostTextActionType => ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    } as const
)

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
        type: SET_USER_PROFILE, profile
    } as const
)
export const getUserStatusAC = (status: string) => ({
        type: SET_USER_STATUS, status
    } as const
)
export const updateUserStatusAC = (status: string) => ({
        type: UPDATE_USER_STATUS, status
    } as const
)

export const getUsersProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(getUserStatusAC(response.data))
    })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(updateUserStatusAC(status))
        }
    })
}

export default profileReducer;