import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {SetUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)

            //items озможно не нужно
        })
    }

    render () {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
};


let mapStateToProps = (state: AppStateType) => {
    return {
      profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps,{SetUserProfile}) (ProfileContainer);