import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {
    ActionsTypes, AddPostAC,
    AddPostActionType,
    PostsType, updateNewPostTextAC,
    UpdateNewPostTextActionType
} from "../../../redux/state";


export type MyPostsPropsType = {
    state: PostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    // let AddPostAC = (): AddPostActionType => {
    //     return {
    //         type: 'ADD-POST', newPostText: props.newPostText
    //     }
    // }
    //
    // let updateNewPostTextAC = (text: string) : UpdateNewPostTextActionType => {
    //     return {
    //         type: 'UPDATE-NEW-POST-TEXT', newText: text
    //     }
    // }

    let postsElements = props.state.map((p) =>
        <Posts key={p.id}
               id={p.id}
               message={p.message}
               likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            // let text = newPostElement.current.value ;
            // props.addPost();
            // props.dispatch({type : 'ADD-POST',newPostText: props.newPostText})
            let action = AddPostAC(props.newPostText)
            props.dispatch(action)
        }
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            // props.updateNewPostText(text)
            // props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text})
            let action = updateNewPostTextAC(text)
            props.dispatch(action)
        }
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
