import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {PropsType} from "../Profile";
import ProfileStatus from "./ProfileStatus";

export function ProfileInfo(props: PropsType) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div><img alt='profile-img' src={props.profile.photos.large}/></div>
               ava + description
            </div>
            <ProfileStatus status={'Hello my friends'} />
        </div>
    )
}