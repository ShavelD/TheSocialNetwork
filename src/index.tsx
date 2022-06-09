import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, RootPropsType, updateNewPostText} from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    )
}
rerenderEntireTree()
subscribe(rerenderEntireTree)
