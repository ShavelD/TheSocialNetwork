import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

 type MapStateToPropsType = {
     isLoggedIn: boolean
 }

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
     return {
         isLoggedIn: state.authMe.isLoggedIn
     }
}

export function withAuthRedirect<T extends {},>(Component: ComponentType<T>) {
    const  RedirectComponent = (props: MapStateToPropsType) => {
        let {isLoggedIn, ...restProps} = props
        if (!isLoggedIn) return <Redirect to={'/login'}/>
        return <Component  {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
};

