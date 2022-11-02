import {
    FollowActionType,
    SendMessageActionType,
    setCurrentActionType, setFolowingIsProgressActionType, setIsFetchingActionType, setTotalCountActionType,
    setUsersActionType,
    unFollowActionType
} from "./users-reducer";
import {
    AddPostActionType,
    SetUserProfileActionType,
    UpdateNewMessageBodyActionType,
    UpdateNewPostTextActionType
} from "./profile-reducer";
import {setUserDataActionType} from "./auth-reducer";

export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentActionType
    | setTotalCountActionType
    | setIsFetchingActionType
    | SetUserProfileActionType
    | setUserDataActionType
    | setFolowingIsProgressActionType