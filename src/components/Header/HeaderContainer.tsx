import React from 'react';
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData, logOutTC} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isLoggedIn: boolean,
    login: null | string,
}

export type MapDispatchAuthPropsType = {
    logOutTC: () => void
    // getAuthUserData: () => void
}

export type AuthPropsType =   MapStatePropsType & MapDispatchAuthPropsType

class HeaderContainer extends React.Component<AuthPropsType, {}> {

    // componentDidMount() {
    //     this.props.getAuthUserData();
    // }

    render() {
        return <Header {...this.props}
                       isLoggedIn={this.props.isLoggedIn}
                       login={this.props.login}
                       logOutTC={this.props.logOutTC}
        />
    }
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        login: state.auth.login
    }
}


export default connect(mapStateToProps,{logOutTC})(HeaderContainer);