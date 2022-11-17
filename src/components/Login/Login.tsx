import React from 'react';
import {LoginForm} from "./LoginForm";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type LoginPropsType = MapStatePropsType

type MapStatePropsType = {
    isAuth:boolean
}


const Login = (props: LoginPropsType) => {

    return (
        <div>
            <h2>LOGIN</h2>
            <LoginForm/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType):MapStatePropsType =>{
    return{
        isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps)(Login)