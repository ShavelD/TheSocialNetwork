import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter,Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {CircularProgress} from "@mui/material";
import {ErrorSnackbar} from "./components/ErrorSnackbar/ErrorSnackbar";
import {getAuthUserData} from "./redux/auth-reducer";



function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserData())
    },[])
    const isInitialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Dialogs/' render={() => <DialogsContainer/>}/>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Users/' render={() => <UsersContainer/>}/>
                    <Route path='/Login/' render={() => <Login/>}/>
                </div>
                <ErrorSnackbar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
