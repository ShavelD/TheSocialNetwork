import {useFormik} from "formik";
import {setIsLoggedInTC} from "../../redux/auth-reducer";
import {useAppDispatch} from "../../redux/redux-store";


export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(setIsLoggedInTC(values))
            // alert(JSON.stringify(values))
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
                    <button type="submit">Login
                    </button>
                </div>
            </div>
        </form>
    )
}


