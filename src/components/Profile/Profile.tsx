import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, updateNewPostText} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
    profilePage: ProfilePageType
    updateNewPostText: (newText: string | undefined) => void
}

export function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}