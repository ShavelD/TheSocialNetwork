import React from "react";
import {MyPosts} from "./MyPosts";
import {AddPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {ActionsTypes, RootPropsType} from "../../../redux/store";
import {store} from "../../../redux/redux-store";
import {connect} from "react-redux";


let mapStateToProps = (state: RootPropsType) => {
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