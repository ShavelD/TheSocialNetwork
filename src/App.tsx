import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {RootPropsType} from "./redux/state";

type AppPropsType = {
    state: RootPropsType
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
                        <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                 messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/Profile' render={() =>
                        <Profile posts={props.state.profilePage.posts}/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
