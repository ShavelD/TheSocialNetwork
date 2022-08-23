import {connect} from "react-redux";
import {Users, UsersType} from "./Users";
import {followCreator, InitialStateType, setUsersCreator, unfollowCreator} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = MapDispatchPropsType & MapStatePropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
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
        })
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)