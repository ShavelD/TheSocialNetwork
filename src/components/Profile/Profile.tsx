import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    dispatch: (action: ActionsTypes) => void
    state: ProfilePageType
    newPostText: string
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}

export function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.posts}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}
                     // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}