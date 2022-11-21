import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {ActionsTypes} from "./types";
import {useDispatch} from "react-redux";
import authMeReducer from "./authMe-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    authMe: authMeReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateType, unknown, ActionsTypes>>()


let store = createStore(rootReducer, applyMiddleware(thunk))
export default store

