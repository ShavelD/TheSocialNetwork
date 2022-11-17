import React from 'react';
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean,
    login: null | string
}


export type AuthPropsType =   MapStatePropsType

class HeaderContainer extends React.Component<AuthPropsType, {}> {

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
    }
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps)(HeaderContainer);