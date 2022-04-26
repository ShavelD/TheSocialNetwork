import React from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export function MyPosts() {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Posts message='Hi, how are you?' likesCount={6}/>
                <Posts message='Its my first post' likesCount={10}/>
            </div>
        </div>
    )
}
