import React from 'react';
import {Profile, ProfileType} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUsersProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathUserIdType = {
    userId: string
}

type mapDispatchToPropsType = {
    getUsersProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
}

type mapStateToPropsType = {
    profile: ProfileType
    status: string
}

type OwnPropsType = mapDispatchToPropsType & mapStateToPropsType
type PropsType = RouteComponentProps<PathUserIdType> & OwnPropsType & {status: string} & {updateUserStatus: (status: string) => void
}

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '25006'
        }
        this.props.getUsersProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                />
            </div>
        );
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
//
// import {connect} from 'react-redux'
// import React, {ComponentType} from 'react'
// import {Profile} from './Profile'
// import {Params, useParams} from 'react-router-dom'
// import {compose} from 'redux'
// import {AppStateType} from "../../redux/redux-store";
// import {getUsersProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
//
// export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
//
// export type mapDispatchToPropsType = {
//     addPost: () => void
//     updateNewPostText: (text: string) => void
//     getUserProfile: (profile: number) => void
//     updateStatus: (newStatus: string) => void
//     getStatus: (userId: number) => void
// }
//
// export type WithUrlDataContainerComponentType = mapStateToPropsType & mapDispatchToPropsType
//
// type ProfileRequestContainerType = WithUrlDataContainerComponentType & {
//     params: Params
// }
//
// class ProfileContainer extends React.Component<ProfileRequestContainerType> {
//
//     componentDidMount() {
//         let {userId} = this.props.params
//         userId && this.props.getUserProfile(+userId)
//         userId && this.props.getStatus(+userId)
//     }
//
//     render() {
//         return (
//             <Profile {...this.props}
//                      profile={this.props.profile}
//                      status={this.props.status}
//                      updateUserStatus={this.props.updateStatus}
//             />
//         )
//     }
// }
//
// const mapStateToProps = (state: AppStateType) => {
//     return ({
//         posts: state.profilePage.posts,
//         profile: state.profilePage.profile,
//         status: state.profilePage.status
//     })
// }
//
// function withRouter(Component: ComponentType<ProfileRequestContainerType>) {
//     function ComponentWithParams(props: WithUrlDataContainerComponentType) {
//         return <Component {...props} params={useParams()}/>
//     }
//     return ComponentWithParams
// }
//
// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus}),
//     withRouter)(ProfileContainer)


