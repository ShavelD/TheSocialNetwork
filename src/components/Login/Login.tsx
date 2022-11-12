import React from 'react';
import { useFormik} from 'formik';
import {useDispatch} from "react-redux";

export type LoginFormPropsType = {}

const LoginForm = (props: LoginFormPropsType) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues : {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            // dispatch(setIsLoggedInTC(values))
            alert(JSON.stringify(values))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{display: "block", padding: "35px 0 0 15px"}}>
                <div>
                    <label htmlFor="First name">Email</label>
                    <input
                        placeholder={'email'}
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div>
                    <label htmlFor="First name">Password</label>
                    <input
                        placeholder={'password'}
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <div>
                    <input
                        type={"checkbox"}
                        name="rememberMe"
                        onChange={formik.handleChange}
                    />
                    remember me
                </div>
                <div>
                    <button type="submit" >Login
                    </button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;

//
// export const LoginForm = (props: any) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={"Login"} name={"login"} component={"input"}/>
//             </div>
//             <div>
//                 <Field placeholder={"Password"} name={"password"} component={"input"}/>
//             </div>
//             <div>
//                 <Field component={"input"} name={"remember me"} type={"checkbox"}/> remember me
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
//
// export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
//
// export const Login = () => {
//
//     const onSubmit = (formData: any) => {
//         console.log(formData)
//     }
//
//     return <div>
//         <h3>Login Please</h3>
//         <LoginReduxForm onSubmit={onSubmit}/>
//     </div>
// }

