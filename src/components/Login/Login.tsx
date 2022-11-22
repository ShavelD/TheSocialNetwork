import {Redirect} from "react-router-dom";
import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";


type LoginPropsType = MapStatePropsType

type MapStatePropsType = {
    isLoggedIn: boolean
}

const Login = (props: LoginPropsType) => {

    if (props.isLoggedIn){
        return <Redirect to={'/profile'}/>
    }

    return(
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType =>{
    return{
        isLoggedIn:state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(Login)