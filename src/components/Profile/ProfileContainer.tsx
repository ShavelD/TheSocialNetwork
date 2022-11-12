import React from 'react';
import {Profile, ProfileType} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUsersProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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



