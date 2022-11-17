import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export type PropsType = {
    isAuth: boolean,
    login: null | string
}

export function Header(props: PropsType) {
    return (
        <header className={s.header}>
            <img
                src='http://www.dsource.in/sites/default/files/case-study/logo-70-years-indias-independence/download-logo/images/Ashley-logo.png'/>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ?<div>{props.login}</div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}