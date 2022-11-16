import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {PostsType} from "../../../redux/profile-reducer";
import {useFormik} from "formik";


export type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.posts.map((p) =>
        <Posts key={p.id}
               id={p.id}
               message={p.message}
               likesCount={p.likesCount}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    // let onAddPost = () => {
    //     props.addPost();
    // }
    //
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     if (newPostElement.current) {
    //         let text = newPostElement.current.value;
    //         props.updateNewPostText(text)
    //     }
    // }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostsForm addPost={props.addPost}/>
                {/*<div>*/}
                {/*    <textarea onChange={onPostChange}*/}
                {/*              ref={newPostElement}*/}
                {/*              value={props.newPostText}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={onAddPost}>Add post</button>*/}
                {/*</div>*/}
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type AddPostTypeForm = {
    addPost: (newPostText: string) => void
}

const AddPostsForm = (props: AddPostTypeForm) => {
    const formik = useFormik({
        initialValues: {
            newPostText: ''
        },

        onSubmit: values => {
            alert(JSON.stringify(values));
            props.addPost(values.newPostText)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{display: "block"}}>
                <label style={{color: "gold"}} htmlFor="textarea">Write a message</label>
                <textarea
                    name="newPostText"
                    onChange={formik.handleChange}
                    value={formik.values.newPostText}
                    onBlur={formik.handleBlur}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

