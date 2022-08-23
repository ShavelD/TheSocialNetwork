import React from "react";
import {MyPosts} from "./MyPosts";
import {AddPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import store, {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {ActionsTypes} from "../../../redux/types";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextCreator(text)
            dispatch(action)
        },
        addPost: () => {
            let action = AddPostCreator(store.getState().profilePage.newPostText)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)