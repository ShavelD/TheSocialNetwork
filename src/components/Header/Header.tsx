import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RequestStatusType} from "../../redux/app-reducer";
import {makeStyles} from "@material-ui/styles";


export type PropsType = {
    isLoggedIn: boolean,
    login: null | string,
    logOutTC: () => void,
}


const useStyles = makeStyles({
    root: {
        position: 'absolute',
        zIndex: 9999,
        top: 56,
        width: '1366px',
        // left: 0,
        background: 'linear-gradient(45deg, #29f0e1 30%, #d86b0f 90%)',
        border: 0,
        borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        // height: 4,
        // width: '1252px',
        // padding: '0 0',
    },
});

export function Header(props: PropsType) {
    const status = useSelector<AppStateType, RequestStatusType>((state) => state.app.status)
    const classes = useStyles();

    return (
        <div className={s.header}>
            <header >
                <img
                    src='http://www.dsource.in/sites/default/files/case-study/logo-70-years-indias-independence/download-logo/images/Ashley-logo.png'/>
                <div className={s.loginBlock}>{props.isLoggedIn ? <div>{props.login} $$
                        <button onClick={props.logOutTC}>Log Out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
    {status === 'loading' && <LinearProgress className={classes.root}/>}
        </div>
)
}