import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from './../../components/assets/images/users.png'

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
// {
//     name: string
//     id: number
//     uniqueUrlName: string
//     photos: {
//         small: string
//         large: string
//     }
//     status: string
//     followed: boolean
// }
}

export type UsersLocationType = {
    city: string,
    country: string
}

export type UsersPageType = {
    users: UsersType[]
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.container}>
            <div>
                {
                    pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.selectedPage: s.default}
                                     // return <span className={this.props.currentPage === p && s.selectedPage}
                        onClick={()=>{this.onPageChange(p)}}>{p}</span>
                    })
                }
            </div>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                       <div>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {
                                   this.props.unfollow(u.id)
                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   this.props.follow(u.id)
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
    }
}

export default Users;
//
// export const Users = (props: UsersPropsType) => {
//     let getUsers = () => {
//         if (props.usersPage.users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 debugger
//                 props.setUsers(response.data.items)
//             })
//         }
//     }
//
//
//     return <div className={s.container}>
//         {
//             props.usersPage.users.map(u => <div key={u.id}>
//                 <span>
//                    <div>
//                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
//                    </div>
//                    <div>
//                        {u.followed
//                            ? <button onClick={() => {
//                                props.unfollow(u.id)
//                            }}>Unfollow</button>
//                            : <button onClick={() => {
//                                props.follow(u.id)
//                            }}>Follow</button>}
//                    </div>
//                </span>
//                 <span>
//                    <span>
//                        <div>{u.name}</div>
//                        <div>{u.status}</div>
//                    </span>
//                 <span>
//                        <div>{'u.location.country'}</div>
//                        <div>{'u.location.city'}</div>
//                    </span>
//                </span>
//             </div>)
//         }
//     </div>
// };
