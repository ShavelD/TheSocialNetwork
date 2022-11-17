import React from "react"
// export type errorsType = {
//     email?: string,
//     password?: string,
//     rememberMe?: boolean,
//     newPostText?: string
// }
//
// export const validate = (values: { email: string,password: string | any[],rememberMe: boolean ,newPostText: string | any[]}) => {
//     const errors: errorsType = {};
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }
//     if (!values.password) {
//         errors.password = 'Required'
//     } else if (values.password.length < 5) {
//         errors.password = 'Must be at least 5 characters.'
//     }
//     if (!values.rememberMe) {
//         errors.rememberMe = true
//     } else if (values.rememberMe) {
//         errors.rememberMe = false
//     }
//     if (!values.newPostText) {
//         errors.newPostText = 'Required'
//     } else if (values.newPostText.length < 10) {
//         errors.newPostText = 'Must be at least 10 characters.'
//     }else if (values.newPostText.length > 40) {
//         errors.newPostText = 'Must be 40 characters or less'
//     }
//     return errors
// }