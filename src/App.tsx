import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {HashRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";




function App() {
    // let state = props.store.getState()
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/Profile' render={() => <Profile />}
                    />
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
