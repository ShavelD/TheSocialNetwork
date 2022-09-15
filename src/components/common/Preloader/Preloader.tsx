import React from 'react';
import s from "../../Users/Users.module.css";
import preloader from "../../assets/images/Skateboarding.gif";

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;