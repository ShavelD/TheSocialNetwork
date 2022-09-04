import {connect} from "react-redux";
import {
    followCreator,
    InitialStateType,
    setCurrentPageCreator,
    setUsersCreator,
    unfollowCreator,
    setTotalUsersCountCreator
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import Users, {UsersType} from "./Users";

type MapStatePropsType = {
   users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<UsersPropsType,{}> {
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

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChange={this.onPageChange}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
        />
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: ((userId: number) => {
            dispatch(followCreator(userId))
        }),
        unfollow: ((userId: number) => {
            dispatch(unfollowCreator(userId))
        }),
        setUsers: ((users: UsersType[]) => {
            dispatch(setUsersCreator(users))
        }),
        setCurrentPage: ((pageNumber: number) => {
            dispatch(setCurrentPageCreator(pageNumber))
        }),
        setTotalUsersCount: ((totalUsersCount: number) => {
            dispatch(setTotalUsersCountCreator(totalUsersCount))
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)