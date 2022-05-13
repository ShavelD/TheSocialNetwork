import React from "react";
import s from './Profile.module.css'
import {MyPosts,  MyPostsProps} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export function Profile(props: MyPostsProps) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    )
}