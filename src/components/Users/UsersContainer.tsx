import {connect} from "react-redux";
import {
    setCurrentPage,
    toogleFolowingIsProgress,
    follow,
    unfollow, requestUsers
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Users, {UsersType} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFolowingIsProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


type MapStatePropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    folowingIsProgress: number[]
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber,this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   folowingIsProgress={this.props.folowingIsProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        folowingIsProgress: getFolowingIsProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow,unfollow, setCurrentPage,toogleFolowingIsProgress,requestUsers}),
withAuthRedirect
) (UsersContainer)

// export default withAuthRedirect(connect(mapStateToProps, {
//     follow,unfollow, setCurrentPage,toogleFolowingIsProgress,getUsers
// })(UsersContainer))


// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: ((userId: number) => {
//             dispatch(followCreator(userId))
//         }),
//         unfollow: ((userId: number) => {
//             dispatch(unfollowCreator(userId))
//         }),
//         setUsers: ((users: UsersType[]) => {
//             dispatch(setUsersCreator(users))
//         }),
//         setCurrentPage: ((pageNumber: number) => {
//             dispatch(setCurrentPageCreator(pageNumber))
//         }),
//         setTotalUsersCount: ((totalUsersCount: number) => {
//             dispatch(setTotalUsersCountCreator(totalUsersCount))
//         }),
//         toggleIsFetching: ((isFetching: boolean) => {
//             dispatch(toggleIsFetchingCreator(isFetching))
//         })
//     }
// }
