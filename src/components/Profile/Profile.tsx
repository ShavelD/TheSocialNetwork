import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div>
            <div>
                <img
                    src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}