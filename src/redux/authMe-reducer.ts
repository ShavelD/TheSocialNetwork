import { Dispatch} from "redux";
import {AuthMe, LoginParamsType, Result_Code} from "../api/api";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";


export type setIsLoggedActionType = ReturnType<typeof setIsLoggedInAC>

export type AuthActionsType = setIsLoggedActionType

// const initialState = {
//     isLoggedIn: false,
//     userId: null,
//     login: null,
//     email: null
// }

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
}

export type InitialStateType = {
    id: null|number
    email: null | string
    login: null | string
    isLoggedIn: boolean
}

type ActionsType = ReturnType<typeof setIsLoggedInAC> | SetAppStatusActionType | SetAppErrorActionType

// export type InitialStateType = typeof initialState

const authMeReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        default:
            return state
    }
}
export const setIsLoggedInAC = (isLoggedIn: boolean) => ({type:'login/SET-IS-LOGGED-IN', isLoggedIn} as const)

export const loginTC = (data: LoginParamsType) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const response = await AuthMe.login(data)
        if (response.data.resultCode === Result_Code.OK) {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(response.data, dispatch)
        }
    }
    catch (error) {
        handleServerNetworkError(error as {message: string}, dispatch)
    }

}

export default authMeReducer;

// export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

