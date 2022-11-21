import React from 'react';
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isLoggedIn: boolean,
    login: null | string
}


export type AuthPropsType =   MapStatePropsType

class HeaderContainer extends React.Component<AuthPropsType, {}> {

    render() {
        return <Header {...this.props} isLoggedIn={this.props.isLoggedIn} login={this.props.login}/>
    }
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isLoggedIn: state.authMe.isLoggedIn,
        login: state.authMe.login
    }
}


export default connect(mapStateToProps)(HeaderContainer);