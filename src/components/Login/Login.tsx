import React from 'react';
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"remember me"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export const Login = () => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return <div>
        <h3>Login Please</h3>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

