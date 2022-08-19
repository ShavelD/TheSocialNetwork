import {ActionsTypes, RootPropsType, UsersType} from "../../redux/store";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followCreator, setUsersCreator, unfollowCreator} from "../../redux/users-reducer";

let mapStateToProps = (state: RootPropsType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)