import React from 'react';
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean,
    login: string
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

export type AuthPropsType = MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<AuthPropsType, {}> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);