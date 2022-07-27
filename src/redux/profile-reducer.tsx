import React from "react";
import {ActionsTypes, AddPostActionType, PostsType, ProfilePageType, UpdateNewPostTextActionType} from "./store";

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
        case ADD_POST: {
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 10
            }

            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
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