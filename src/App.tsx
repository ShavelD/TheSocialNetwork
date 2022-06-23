import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/state";

//
type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType)  {
   const state = props.store.getState()
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/Dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/Profile' component={Profile}/>*/}
                    <Route path='/Dialogs' render={() =>
                        <Dialogs state={state.dialogsPage}
                        />}/>
                    <Route path='/Profile' render={() =>
                        <Profile state={state.profilePage}
                                 dispatch={props.store.dispatch.bind(props.store)}
                                 newPostText={state.profilePage.newPostText}
                                 // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                        />}
                    />
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
