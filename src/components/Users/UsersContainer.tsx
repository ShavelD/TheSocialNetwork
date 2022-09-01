import {connect} from "react-redux";
import Users, {UsersType} from "./Users";
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

type MapStatePropsType = {
    usersPage: InitialStateType,
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
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

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)