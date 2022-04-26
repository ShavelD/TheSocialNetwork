import React from "react";
import s from './Header.module.css'

export function Header() {
    return (
        <header className={s.header}>
            <img
                src='http://www.dsource.in/sites/default/files/case-study/logo-70-years-indias-independence/download-logo/images/Ashley-logo.png'/>
        </header>
    )
}