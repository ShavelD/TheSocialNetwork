import React from "react";
import {ActionsTypes} from "./types";

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


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 6},
        {id: 2, message: "It's my first post", likesCount: 10}
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 10
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state

    }
}

export const AddPostCreator = (newPostText: string): AddPostActionType => ({
    type: ADD_POST, newPostText: newPostText
})

export const updateNewPostTextCreator = (text: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer;