import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.flex}`}>
                <NavLink to="/Friends" activeClassName={s.activeLink}>Friends</NavLink>
            </div>
        </nav>
    )
}