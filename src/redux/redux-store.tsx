import {applyMiddleware, combineReducers} from "redux";
import {legacy_createStore as createStore} from 'redux';
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


let store = createStore(rootReducer, applyMiddleware(thunk))
export default store

