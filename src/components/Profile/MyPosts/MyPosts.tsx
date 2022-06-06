import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {PostsType, ProfilePageType, updateNewPostText} from "../../../redux/state";


type MyPostsPropsType = {
    state: PostsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void

}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.state.map((p) => <Posts key={p.id} id={p.id} message={p.message}
                                                      likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if(newPostElement.current){
            let text = newPostElement.current.value ;
            props.addPost();
        }
    }

    let onChangeHandler= (e:ChangeEvent<HTMLTextAreaElement>) => {
        if(newPostElement.current){
            let text = newPostElement.current.value;
            props.updateNewPostText(text)
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler}
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
