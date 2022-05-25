import React from "react";
import s from './Post.module.css';
import {SidebarType} from "../../../../redux/state";

export type PostsPropsType = {
    message: string
    likesCount: number
    id: number
}

export function Posts(props: PostsPropsType) {
    return (
        <div className={s.item}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
