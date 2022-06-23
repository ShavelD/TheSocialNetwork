import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <App
            store={store}
        />,
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
