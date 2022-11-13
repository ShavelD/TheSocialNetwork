import {
    FollowActionType,
    SendMessageActionType,
    setCurrentActionType, setFolowingIsProgressActionType, setIsFetchingActionType, setTotalCountActionType,
    setUsersActionType,
    unFollowActionType
} from "./users-reducer";
import {
    AddPostActionType,
    SetUserProfileActionType, SetUserStatusType,
    UpdateNewMessageBodyActionType,
    UpdateNewPostTextActionType, updateUserStatusType
} from "./profile-reducer";
import {setIsLoggedActionType, setUserDataActionType} from "./auth-reducer";

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
    | setFolowingIsProgressActionType
    | SetUserStatusType
    | updateUserStatusType
    | setUserDataActionType
    | setIsLoggedActionType
