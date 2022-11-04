import React from 'react';
import {Profile, ProfileType} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUsersProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathUserIdType = {
    userId: string
}

type mapDispatchToPropsType = {
    getUsersProfile: (userId: string) => void
}

type mapStateToPropsType = {
    profile: ProfileType
}

type OwnPropsType = mapDispatchToPropsType & mapStateToPropsType
type PropsType = RouteComponentProps<PathUserIdType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUsersProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
};


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})


let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUsersProfile})(withUrlDataContainerComponent);


