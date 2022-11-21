import {useFormik} from "formik";
import {useAppDispatch} from "../../redux/redux-store";
import React from "react";
import {LoginParamsType} from "../../api/api";
import {loginTC} from "../../redux/authMe-reducer";

type errorsType = {
    email?: string,
    password?: string,
    rememberMe?: boolean
}

const validate = (values: LoginParamsType) => {
    const errors: errorsType = {};
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 5) {
        errors.password = 'Must be at least 5 characters.'
    }
    if (!values.rememberMe) {
        errors.rememberMe = true
    } else if (values.rememberMe) {
        errors.rememberMe = false
    }
    return errors
}


export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate,
        onSubmit: (values: LoginParamsType) => {
            alert(JSON.stringify(values))
            dispatch(loginTC(values))
            formik.resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{display: "block", padding: "35px 0 0 15px"}}>
                <div>
                    <label htmlFor="First name">Email</label>
                    <input
                        placeholder={'email'}
                        {...formik.getFieldProps('email')}
                    />
                    {(formik.touched.email && formik.errors.email) ?
                        <div style={{color: 'red'}}>{formik.errors.email}</div> : ''}
                </div>
                <div>
                    <label htmlFor="First name">Password</label>
                    <input
                        placeholder={'password'}
                        type={'password'}
                        {...formik.getFieldProps('password')}
                    />
                    {(formik.touched.password && formik.errors.password) ?
                        <div style={{color: 'red'}}>{formik.errors.password}</div> : ''}
                </div>
                <div>
                    <input
                        type={"checkbox"}
                        {...formik.getFieldProps('rememberMe')}
                        checked={formik.values.rememberMe}
                    />
                    {(formik.touched.rememberMe && formik.errors.rememberMe) ?
                        formik.errors.rememberMe : ''}
                    Remember Me
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    )
}


