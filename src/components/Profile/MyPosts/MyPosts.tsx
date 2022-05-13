import React from "react";
import s from './MyPosts.module.css';
import {Posts, PostsPropsType} from "./Post/Posts";
import {RootPropsType} from "../../../redux/state";


export type MyPostsProps = {
    posts: PostsPropsType[]
}

export function MyPosts(props: MyPostsProps ) {

    let postsElements = props.posts.map( (p) =>  <Posts message={p.message} likesCount={p.likesCount} />)
    // let newPostElement = React.createRef();
    //
    // let addPost = () => {
    //    let text = newPostElement.current.value;
    //    alert(text)
    // }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                     <textarea ></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
