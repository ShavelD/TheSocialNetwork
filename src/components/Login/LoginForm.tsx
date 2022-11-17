import {useFormik} from "formik";
import {setIsLoggedInTC} from "../../redux/auth-reducer";
import {useAppDispatch} from "../../redux/redux-store";
import React from "react";

type errorsType = {
    email?: string,
    password?: string,
    rememberMe?: boolean
}

const validate = (values: {email: string,password: string | any[],rememberMe: boolean }) => {
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
        onSubmit: values => {
            debugger
            // alert(JSON.stringify(values))
            dispatch(setIsLoggedInTC(values))
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
                        // name="email"
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.email}
                        {...formik.getFieldProps('email')}
                    />
                    {(formik.touched.email && formik.errors.email) ?
                        <div style={{color: 'red'}}>{formik.errors.email}</div> : ''}
                </div>
                <div>
                    <label htmlFor="First name">Password</label>
                    <input
                        placeholder={'password'}
                        {...formik.getFieldProps('password')}
                    />
                    {(formik.touched.password && formik.errors.password) ?
                        <div style={{color: 'red'}}>{formik.errors.password}</div> : ''}
                </div>
                <div>
                    <input
                        type={"checkbox"}
                        // name="rememberMe"
                        // onChange={formik.handleChange}
                        // checked={formik.values.rememberMe}
                        // onBlur={formik.handleBlur}
                        {...formik.getFieldProps('rememberMe')}
                    />
                    {(formik.touched.rememberMe && formik.errors.rememberMe) ?
                        formik.errors.rememberMe : ''}
                    Remember Me
                </div>
                <div>
                    <button type="submit">Login
                    </button>
                </div>
            </div>
        </form>
    )
}


