import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UsersLocationType
}

export type UsersLocationType ={
    city: string,
    country: string
}

export type UsersPageType = {
    users: UsersType[]
}

export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://ratatum.com/wp-content/uploads/2018/08/5-10.jpg",
                    followed: false,
                    fullName: "Dmitry Sh",
                    status: "I am a boss",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2,
                    photoUrl: "https://basetop.ru/wp-content/uploads/2018/05/3uptm24x.jpg",
                    followed: true,
                    fullName: "Alex Sm",
                    status: "I am a boss",
                    location: {city: "Moscow", country: "Russian"}
                },
                {
                    id: 3,
                    photoUrl: "https://womans.ws/wp-content/uploads/2020/05/5.jpg",
                    followed: false,
                    fullName: "Andrey Sh",
                    status: "I am a boss",
                    location: {city: "London", country: "England"}
                },
            ]
        )
    }


    return <div className={s.container}>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                       <div>
                           <img src={u.photoUrl} className={s.userPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                               : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                       </div>
                   </span>
                <span>
                       <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </span>
                    <span>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                       </span>
                   </span>
            </div>)
        }
    </div>
};
