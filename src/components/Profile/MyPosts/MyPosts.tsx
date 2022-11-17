import React from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {PostsType} from "../../../redux/profile-reducer";
import {useFormik} from "formik";


export type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (newPostText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.posts.map((p) =>
        <Posts key={p.id}
               id={p.id}
               message={p.message}
               likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostsForm addPost={props.addPost}/>
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

type errorsType = {
    newPostText?: string
}

const validate = (values: { newPostText: string | any[]; }) => {
    const errors: errorsType = {};
    if (!values.newPostText) {
        errors.newPostText = 'Required'
    } else if (values.newPostText.length < 10) {
        errors.newPostText = 'Must be at least 10 characters.'
    }else if (values.newPostText.length > 40) {
        errors.newPostText = 'Must be 40 characters or less'
    }
    return errors
}


const AddPostsForm = (props: AddPostTypeForm) => {
    const formik = useFormik({
        initialValues: {
            newPostText: ''
        },
        validate,
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
                {(formik.touched.newPostText && formik.errors.newPostText) ?
                    <div style={{color: 'red'}}>{formik.errors.newPostText}</div> : ''}
            </div>
            <button  type="submit">Submit</button>
            <button type="reset"  onClick={ e => formik.resetForm()}> Reset</button>
        </form>
    );
};



