import React from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {PostsType, ProfilePageType, updateNewPostText} from "../../../redux/state";


type MyPostsPropsType = {
    state: PostsType[]
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string | undefined) => void
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.state.map((p) => <Posts key={p.id} id={p.id} message={p.message}
                                                      likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
