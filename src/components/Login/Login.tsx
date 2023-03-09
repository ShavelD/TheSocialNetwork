import {Redirect} from "react-router-dom";
import {LoginForm} from "./LoginForm";
import {connect, useSelector} from "react-redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";


// type LoginPropsType = MapStatePropsType
// //
// type MapStatePropsType = {
//     isLoggedIn: boolean
// }

const Login = () => {

    let isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)

    if (isLoggedIn){
        return <Redirect to={'/profile'}/>
    }

    return(
        <div>
            <LoginForm />
        </div>
    )
}

// const mapStateToProps = (state: AppStateType): MapStatePropsType =>{
//     return{
//         isLoggedIn:state.auth.isLoggedIn
//     }
// }

export default Login;