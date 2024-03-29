import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../assets/images/users.png";
import {NavLink} from "react-router-dom";


export type UsersType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: UsersLocationType
}

export type UsersLocationType = {
    city: string,
    country: string
}

export type UsersPageType = {
    users: UsersType[]
}

type PropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChange: (pageNumber: number) => void
    folowingIsProgress: number[]
}

let Users = (props: PropsType) => {
    let pagesCount = props.totalUsersCount / props.pageSize
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.container}>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectedPage : s.default}
                                     onClick={() => {
                                         props.onPageChange(p)
                                     }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                       <div>
                           <NavLink to={'/profile/' + u.id}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                           </NavLink>
                       </div>
                       <div>
                           {u.followed
                               ? <button disabled={props.folowingIsProgress.some(id => id === u.id)} onClick={() => {
                                   props.unfollow(u.id)
                               }}>Unfollow</button>
                               : <button disabled={props.folowingIsProgress.some(id => id === u.id)} onClick={() => {
                                   props.follow(u.id)
                               }}>Follow</button>}
                       </div>
                   </span>
                    <span>
                       <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </span>
                    <span>
                           <div>{'u.location.country'}</div>
                           <div>{'u.location.city'}</div>
                       </span>
                   </span>
                </div>)
            }
        </div>
    );
};

export default Users;