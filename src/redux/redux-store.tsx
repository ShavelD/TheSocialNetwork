import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {ActionsTypes} from "./types";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    app: appReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateType, unknown, ActionsTypes>>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector



let store = createStore(rootReducer, applyMiddleware(thunk))
export default store

// store.subscribe(() => {
//     const posts = store.getState().profilePage.posts;
//     localStorage.setItem('posts', JSON.stringify(posts))
// });

// @ts-ignore
window.store = store;

