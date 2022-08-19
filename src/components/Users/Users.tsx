import React from 'react';
import {UsersType} from "../../redux/store";

type UsersPropsType = {
    users: UsersType[]
}

export const Users = (props: UsersPropsType) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                       <div>
                           <img src=" "/>
                       </div>
                       <div>
                           <button>Follow</button>
                   </div>
                   </span>
                <span>
                       <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </span>
                    <span>
                           <div>{u.location.city}</div>
                           <div>{u.location.country}</div>
                       </span>
                   </span>
            </div>)
        }
    </div>
};
