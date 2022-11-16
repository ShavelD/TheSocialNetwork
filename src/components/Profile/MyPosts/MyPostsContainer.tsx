import React from "react";
import {MyPosts} from "./MyPosts";
import {AddPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {ActionsTypes} from "../../../redux/types";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextCreator(text)
            dispatch(action)
        },
        addPost: (newPostText: string) => {
            dispatch(AddPostCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)