import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {PostsType, ProfilePageType, RootPropsType, updateNewPostText} from "./redux/state";

type AppPropsType = {
    state: RootPropsType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {

    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/Dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/Profile' component={Profile}/>*/}

                    <Route path='/Dialogs' render={() =>
                        <Dialogs state={props.state.dialogsPage}
                                 />}/>
                    <Route path='/Profile' render={() =>
                        <Profile profilePage={props.state.profilePage}
                                 addPost={props.addPost}
                                 updateNewPostText={props.updateNewPostText}
                        />}
                    />
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
